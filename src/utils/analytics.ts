/**
 * Track a CTA or button click.
 */
export const trackButtonClick = (buttonText: string, source: string) => {
  const deviceType = window.innerWidth <= 768 ? "Mobile" : "Desktop";
  if (window.umami) {
    window.umami.track("CTA-click", {
      button: buttonText,
      source,
      device: deviceType,
    });
  }
};

/**
 * Track outbound link clicks.
 */
export const trackOutboundClick = (url: string, location: string) => {
  if (window.umami) {
    window.umami.track("outbound-link-click", {
      url,
      location,
      device: window.innerWidth <= 768 ? "Mobile" : "Desktop",
    });
  }
};

/**
 * Track language switch.
 */
export const trackLanguageSwitch = (lang: string, location: string) => {
  if (window.umami) {
    window.umami.track("language-switch", {
      lang,
      location,
      device: window.innerWidth <= 768 ? "Mobile" : "Desktop",
    });
  }
};

export const assignSessionId = () => {
  let id = localStorage.getItem("teg-session-id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("teg-session-id", id);
  }

  let firstVisit = localStorage.getItem("teg-first-visit");
  if (!firstVisit) {
    firstVisit = Date.now().toString();
    localStorage.setItem("teg-first-visit", firstVisit);
  }
  if (window.umami) {
    window.umami.identify(id, {
      language: navigator.language,
      referrer: document.referrer,
      theme: localStorage.getItem("theme"),
      campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
      source: new URLSearchParams(window.location.search).get("utm_source"),
      firstVisit,
      browser: navigator.userAgent,
      screen: `${window.innerWidth}x${window.innerHeight}`,
      orientation: window.screen.orientation?.type,
      returning: !!localStorage.getItem("teg-first-visit"),
    });
  }
};
