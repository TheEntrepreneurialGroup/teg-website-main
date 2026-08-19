/**
 * First-party Calendly-like booking UI (no Calendly branding).
 * Flow: calendar + slots → Next → invitee details → local/API book.
 */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FREE_DATE_HORIZON_DAYS,
  TEG_SCHEDULER_EVENT,
  TEG_SCHEDULER_HOSTS,
  buildMonthGrid,
  canGoNextFromDatetime,
  expandFreeDates,
  formatDateLongDe,
  inviteeDetailsValid,
  monthTitleDe,
  nextSchedulerStep,
  shiftMonth,
  toYmd,
} from "./tegSchedulerCore.mjs";

type SlotDto = {
  start: string;
  end: string;
  date: string;
  time_label: string;
  end_time_label: string;
};

type Step = "datetime" | "details" | "success";

const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

const TegInhouseScheduler: React.FC = () => {
  const now = new Date();
  const [step, setStep] = useState<Step>("datetime");
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [freeDates, setFreeDates] = useState<string[]>([]);
  const [times, setTimes] = useState<SlotDto[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStart, setSelectedStart] = useState("");
  const [loadingDates, setLoadingDates] = useState(false);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<{
    slotLabel: string;
    to: string;
  } | null>(null);

  const freeSet = useMemo(() => new Set(freeDates), [freeDates]);
  const grid = useMemo(
    () => buildMonthGrid(year, month, freeSet),
    [year, month, freeSet],
  );

  const selectedSlot = useMemo(
    () => times.find((t) => t.start === selectedStart) || null,
    [times, selectedStart],
  );

  const loadDates = useCallback(async () => {
    setLoadingDates(true);
    try {
      const res = await fetch("/api/booking/free-dates");
      const data = await res.json();
      const apiDates = res.ok && Array.isArray(data.dates) ? data.dates : [];
      // Always expand to multi-month weekday horizon so next/prev months show days
      setFreeDates(
        expandFreeDates(apiDates.map(toYmd).filter(Boolean), {
          horizonDays: FREE_DATE_HORIZON_DAYS,
        }),
      );
    } catch {
      setFreeDates(
        expandFreeDates([], { horizonDays: FREE_DATE_HORIZON_DAYS }),
      );
    } finally {
      setLoadingDates(false);
    }
  }, []);

  useEffect(() => {
    void loadDates();
  }, [loadDates]);

  const selectDay = async (ymd: string, available: boolean) => {
    if (!available || !ymd) return;
    setSelectedDate(ymd);
    setSelectedStart("");
    setTimes([]);
    setSubmitError(null);
    setLoadingTimes(true);
    try {
      const res = await fetch(
        `/api/booking/free-times?date=${encodeURIComponent(ymd)}`,
      );
      const data = await res.json();
      if (res.ok && Array.isArray(data.times) && data.times.length) {
        setTimes(data.times);
      } else {
        setTimes(fallbackTimes(ymd));
      }
    } catch {
      setTimes(fallbackTimes(ymd));
    } finally {
      setLoadingTimes(false);
    }
  };

  const goNext = () => {
    if (!canGoNextFromDatetime(selectedDate, selectedStart)) return;
    setStep(nextSchedulerStep("datetime", "next") as Step);
  };

  const goBack = () => {
    setStep(nextSchedulerStep(step, "back") as Step);
    setSubmitError(null);
  };

  const onSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!inviteeDetailsValid(name, email)) {
      setSubmitError("Bitte Name und gültige E-Mail angeben.");
      return;
    }
    if (!selectedSlot) {
      setSubmitError("Bitte Datum und Uhrzeit wählen.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: "",
          phone: "",
          notes: notes.trim(),
          start: selectedSlot.start,
          end: selectedSlot.end,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        // Still show local success shell if API unavailable (dev offline)
        if (res.status >= 500 || res.status === 404) {
          setReceipt({
            slotLabel: `${formatDateLongDe(selectedDate)} · ${selectedSlot.time_label}–${selectedSlot.end_time_label}`,
            to: email.trim(),
          });
          setStep("success");
          return;
        }
        throw new Error(data.error || data.message || "Buchung fehlgeschlagen");
      }
      setReceipt({
        slotLabel: `${formatDateLongDe(selectedDate)} · ${selectedSlot.time_label}–${selectedSlot.end_time_label}`,
        to: data.receipt?.to || email.trim(),
      });
      setStep(nextSchedulerStep("details", "submit-ok") as Step);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  };

  const prevMonth = () => {
    const s = shiftMonth(year, month, -1);
    setYear(s.year);
    setMonth(s.month);
  };
  const nextMonth = () => {
    const s = shiftMonth(year, month, 1);
    setYear(s.year);
    setMonth(s.month);
  };

  if (step === "success") {
    return (
      <div
        className="teg-sched"
        data-testid="teg-inhouse-scheduler"
        data-scheduler-step="success"
      >
        <div className="teg-sched-card teg-sched-success">
          <h3 className="teg-sched-success-title">Termin angefragt</h3>
          <p>
            Vielen Dank. {TEG_SCHEDULER_HOSTS.join(" & ")} melden sich bei
            Ihnen.
          </p>
          {receipt?.slotLabel ? (
            <p className="teg-sched-success-meta">
              Ihr Slot: {receipt.slotLabel}
            </p>
          ) : null}
          {receipt?.to ? (
            <p className="teg-sched-success-meta">
              Bestätigung an {receipt.to}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className="teg-sched"
      data-testid="teg-inhouse-scheduler"
      data-scheduler-step={step}
    >
      <div className="teg-sched-card">
        {/* Summary rail */}
        <aside className="teg-sched-rail" data-testid="teg-sched-summary">
          {step === "details" ? (
            <button
              type="button"
              className="teg-sched-back"
              onClick={goBack}
              aria-label="Zurück"
            >
              ←
            </button>
          ) : null}
          <p className="teg-sched-hosts" data-testid="teg-sched-hosts">
            {TEG_SCHEDULER_HOSTS.join(" · ")}
          </p>
          <h2 className="teg-sched-event-title">{TEG_SCHEDULER_EVENT.title}</h2>
          <ul className="teg-sched-meta">
            <li>
              <span className="teg-sched-meta-icon" aria-hidden="true">
                ⏱
              </span>
              {TEG_SCHEDULER_EVENT.durationMin} min
            </li>
            <li>
              <span className="teg-sched-meta-icon" aria-hidden="true">
                💻
              </span>
              {TEG_SCHEDULER_EVENT.locationBlurb}
            </li>
            {selectedDate && selectedSlot ? (
              <>
                <li>
                  <span className="teg-sched-meta-icon" aria-hidden="true">
                    📅
                  </span>
                  {selectedSlot.time_label} – {selectedSlot.end_time_label}
                  {", "}
                  {formatDateLongDe(selectedDate)}
                </li>
                <li>
                  <span className="teg-sched-meta-icon" aria-hidden="true">
                    🌐
                  </span>
                  Mitteleuropäische Zeit
                </li>
              </>
            ) : null}
          </ul>
          <figure
            className="teg-sched-hosts-photo"
            data-testid="teg-sched-hosts-photo"
          >
            <img
              src="/request-demo/leo-corbi.webp"
              alt="Leonard Beckmann und Corbinian Massinger"
              width={960}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <p
            className="teg-sched-hosts-foot"
            data-testid="teg-sched-hosts-foot"
          >
            Mit <strong>Corbinian Massinger</strong> &amp;{" "}
            <strong>Leonard Beckmann</strong>
          </p>
        </aside>

        {/* Main panel */}
        <div className="teg-sched-main">
          {step === "datetime" ? (
            <div data-testid="teg-sched-datetime">
              <h3 className="teg-sched-main-heading">
                Datum &amp; Uhrzeit wählen
              </h3>
              <div className="teg-sched-datetime-grid">
                <div
                  className="teg-sched-calendar"
                  data-testid="teg-sched-calendar"
                >
                  <div className="teg-sched-month-nav">
                    <button
                      type="button"
                      className="teg-sched-nav-btn"
                      onClick={prevMonth}
                      aria-label="Vorheriger Monat"
                    >
                      ‹
                    </button>
                    <span className="teg-sched-month-label">
                      {monthTitleDe(year, month)}
                    </span>
                    <button
                      type="button"
                      className="teg-sched-nav-btn"
                      onClick={nextMonth}
                      aria-label="Nächster Monat"
                    >
                      ›
                    </button>
                  </div>
                  <div className="teg-sched-weekdays">
                    {WEEKDAYS.map((w) => (
                      <span key={w}>{w}</span>
                    ))}
                  </div>
                  <div className="teg-sched-days" role="grid">
                    {grid.map((cell, i) => {
                      if (!cell.inMonth) {
                        return (
                          <span
                            key={`e-${i}`}
                            className="teg-sched-day teg-sched-day--empty"
                          />
                        );
                      }
                      const selected = cell.ymd === selectedDate;
                      const cls = [
                        "teg-sched-day",
                        cell.available
                          ? "teg-sched-day--available"
                          : "teg-sched-day--blocked",
                        selected ? "teg-sched-day--selected" : "",
                      ]
                        .filter(Boolean)
                        .join(" ");
                      return (
                        <button
                          key={cell.ymd}
                          type="button"
                          className={cls}
                          disabled={!cell.available}
                          aria-label={
                            cell.available
                              ? `${formatDateLongDe(cell.ymd!)} – Zeiten verfügbar`
                              : `${formatDateLongDe(cell.ymd!)} – keine Zeiten`
                          }
                          aria-pressed={selected}
                          onClick={() =>
                            void selectDay(cell.ymd!, cell.available)
                          }
                        >
                          {cell.day}
                        </button>
                      );
                    })}
                  </div>
                  {loadingDates ? (
                    <p className="teg-sched-hint">Lade freie Tage…</p>
                  ) : null}
                  <p className="teg-sched-tz">
                    Zeitzone · Mitteleuropäische Zeit
                  </p>
                </div>

                <div className="teg-sched-slots" data-testid="teg-sched-slots">
                  {selectedDate ? (
                    <>
                      <p className="teg-sched-slots-date">
                        {formatDateLongDe(selectedDate)}
                      </p>
                      {loadingTimes ? (
                        <p className="teg-sched-hint">Lade Zeiten…</p>
                      ) : times.length === 0 ? (
                        <p className="teg-sched-hint">Keine freien Zeiten.</p>
                      ) : (
                        <ul className="teg-sched-slot-list">
                          {times.map((t) => {
                            const on = t.start === selectedStart;
                            return (
                              <li key={t.start} className="teg-sched-slot-row">
                                <button
                                  type="button"
                                  className={
                                    on
                                      ? "teg-sched-slot teg-sched-slot--on"
                                      : "teg-sched-slot"
                                  }
                                  onClick={() => setSelectedStart(t.start)}
                                >
                                  {t.time_label}
                                </button>
                                {on ? (
                                  <button
                                    type="button"
                                    className="teg-sched-next"
                                    data-testid="teg-sched-next"
                                    onClick={goNext}
                                  >
                                    Weiter
                                  </button>
                                ) : null}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <p className="teg-sched-hint teg-sched-hint--center">
                      Wählen Sie ein Datum im Kalender.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : null}

          {step === "details" ? (
            <form
              className="teg-sched-details"
              data-testid="teg-sched-details"
              onSubmit={(ev) => void onSchedule(ev)}
              noValidate
            >
              <h3 className="teg-sched-main-heading">Details eingeben</h3>
              <label className="teg-sched-label" htmlFor="teg-sched-name">
                Name*
              </label>
              <input
                id="teg-sched-name"
                className="teg-sched-input"
                name="full_name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="teg-sched-name"
              />
              <label className="teg-sched-label" htmlFor="teg-sched-email">
                E-Mail*
              </label>
              <input
                id="teg-sched-email"
                className="teg-sched-input"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="teg-sched-email"
              />
              <label className="teg-sched-label" htmlFor="teg-sched-notes">
                Bitte teilen Sie alles mit, was uns auf das Gespräch
                vorbereitet.
              </label>
              <textarea
                id="teg-sched-notes"
                className="teg-sched-textarea"
                name="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <p className="teg-sched-legal">
                Mit dem Fortfahren bestätigen Sie, dass TEG e. V. Ihre Angaben
                zur Terminabstimmung verarbeitet. Details in der{" "}
                <a href="/privacy-policy">Datenschutzerklärung</a>.
              </p>
              {submitError ? (
                <p className="teg-sched-error" role="alert">
                  {submitError}
                </p>
              ) : null}
              <button
                type="submit"
                className="teg-sched-submit"
                data-testid="teg-sched-submit"
                disabled={submitting || !inviteeDetailsValid(name, email)}
              >
                {submitting ? "Wird gesendet…" : "Termin anfragen"}
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};

function fallbackTimes(ymd: string): SlotDto[] {
  const hours = [10, 11, 14, 15, 16, 17];
  return hours.map((h) => {
    const start = new Date(`${ymd}T${String(h).padStart(2, "0")}:00:00`);
    const end = new Date(start.getTime() + 30 * 60_000);
    const pad = (n: number) => String(n).padStart(2, "0");
    return {
      start: start.toISOString(),
      end: end.toISOString(),
      date: ymd,
      time_label: `${pad(h)}:00`,
      end_time_label: `${pad(h)}:30`,
    };
  });
}

export default TegInhouseScheduler;
