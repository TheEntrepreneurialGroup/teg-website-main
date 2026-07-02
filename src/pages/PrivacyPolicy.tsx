import React from "react";
import { SectionTitle } from "@/components/blocks/SectionTitle";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white text-foreground">
      <section className="py-20">
        <div className="container-custom">
          <SectionTitle text="Datenschutzerklärung" as="h1" />

          <div className="prose prose-lg mt-12 max-w-none text-muted-foreground">
            <p>Stand: 2. Juli 2026</p>

            <h2>1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Verarbeitung personenbezogener Daten auf
              dieser Website ist:
            </p>
            <p>
              <strong>The Entrepreneurial Group e. V.</strong>
              <br />
              Kaulbachstrasse 64
              <br />
              80539 München
              <br />
              Deutschland
            </p>
            <p>
              Vertretungsberechtigter Vorstand: Jonathan Babelotzky, Felix Enke,
              Lucas Zierenberg, Ahmed Kaddour
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info+website@teg-ev.de">info+website@teg-ev.de</a>
            </p>

            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Personenbezogene Daten sind alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
              Wir verarbeiten personenbezogene Daten nur, soweit dies für den
              Betrieb dieser Website, die Bearbeitung von Anfragen, die
              Sicherheit unserer Systeme oder die statistische Auswertung der
              Nutzung erforderlich ist oder soweit Sie uns Daten freiwillig
              mitteilen.
            </p>
            <p>
              Die einschlägigen Rechtsgrundlagen ergeben sich insbesondere aus
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b
              DSGVO (Vertrag oder vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit.
              c DSGVO (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse). Für das Speichern von Informationen auf
              Endgeräten oder den Zugriff auf Informationen auf Endgeräten gilt
              ergänzend § 25 TDDDG.
            </p>

            <h2>3. Bereitstellung der Website und Server-Logfiles</h2>
            <p>
              Beim Aufruf dieser Website werden technisch erforderliche Daten
              verarbeitet, damit die Website an Ihr Endgerät ausgeliefert werden
              kann und stabil sowie sicher funktioniert. Hierzu können
              insbesondere folgende Daten gehören:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Endgeräts</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>aufgerufene URL und übertragene Datenmenge</li>
              <li>HTTP-Statuscode</li>
              <li>Referrer-URL, sofern vom Browser übermittelt</li>
              <li>Browsertyp, Browserversion und Betriebssystem</li>
            </ul>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse liegt in der sicheren, fehlerfreien und performanten
              Bereitstellung der Website sowie in der Abwehr von Missbrauch und
              Angriffen. Logdaten werden nur so lange gespeichert, wie dies für
              diese Zwecke erforderlich ist, und anschließend gelöscht oder
              anonymisiert, sofern keine längere Speicherung aus Sicherheits-
              oder Nachweisgründen erforderlich ist.
            </p>

            <h2>4. Hosting durch Netlify</h2>
            <p>
              Diese Website wird über Netlify bereitgestellt. Anbieter ist
              Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, CA
              94104, USA. Netlify verarbeitet im Rahmen des Hostings technische
              Zugriffsdaten und stellt die Infrastruktur zur Auslieferung der
              Website bereit.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt in der zuverlässigen und
              sicheren Bereitstellung unseres Online-Angebots. Soweit Netlify
              personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt die
              Verarbeitung auf Grundlage eines Auftragsverarbeitungsvertrags im
              Sinne von Art. 28 DSGVO.
            </p>
            <p>
              Eine Übermittlung personenbezogener Daten in die USA kann nicht
              ausgeschlossen werden. Netlify verweist für internationale
              Datenübermittlungen unter anderem auf geeignete Garantien wie
              Standardvertragsklauseln und auf das EU-U.S. Data Privacy
              Framework. Weitere Informationen finden Sie in den
              Datenschutzhinweisen von Netlify:{" "}
              <a
                href="https://www.netlify.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.netlify.com/privacy/
              </a>
              .
            </p>

            <h2>5. Webanalyse mit Umami</h2>
            <p>
              Wir nutzen Umami, um die Nutzung unserer Website statistisch zu
              verstehen und unser Angebot technisch sowie inhaltlich zu
              verbessern. Die Umami-Skripte werden auf der Produktivdomain über
              unsere eigene Domain ausgeliefert. Die Erfassung erfolgt über
              unsere Website-Kennung.
            </p>
            <p>
              Nach Angaben des Anbieters erhebt Umami keine Cookies im
              Tracking-Code, anonymisiert die erhobenen Daten und verfolgt
              Nutzer nicht websiteübergreifend. Typische Auswertungsdaten sind
              Seitenaufrufe, Referrer, Browser, Betriebssystem, Gerätetyp und
              Herkunftsland.
            </p>
            <p>
              Zusätzlich verwenden wir auf dieser Website eine lokale
              Besucherkennung, die im lokalen Speicher Ihres Browsers
              gespeichert wird. Dabei werden die Einträge{" "}
              <code>teg-session-id</code> und <code>teg-first-visit</code>{" "}
              angelegt. Die Besucherkennung dient dazu, wiederkehrende Besuche
              statistisch einzuordnen. Zusätzlich können technische Kontextdaten
              wie Browsersprache, Referrer, UTM-Parameter, Bildschirmgröße,
              Orientierung und User-Agent an Umami übermittelt werden.
            </p>
            <p>
              Rechtsgrundlage für die Reichweitenmessung ist Art. 6 Abs. 1 lit.
              f DSGVO. Unser berechtigtes Interesse liegt in der
              nutzerfreundlichen Weiterentwicklung der Website, der Messung von
              Reichweite und der Bewertung, welche Inhalte und Kontaktwege für
              Besucher relevant sind. Soweit für einzelne Speicher- oder
              Zugriffsvorgänge eine Einwilligung erforderlich ist, erfolgt die
              Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO in
              Verbindung mit § 25 Abs. 1 TDDDG.
            </p>
            <p>
              Sie können die lokale Besucherkennung jederzeit löschen, indem Sie
              in Ihrem Browser die Website-Daten für diese Domain entfernen. Sie
              können der Verarbeitung zudem widersprechen, indem Sie uns unter{" "}
              <a href="mailto:info+website@teg-ev.de">info+website@teg-ev.de</a>{" "}
              kontaktieren oder Tracking durch geeignete Browser-Einstellungen
              bzw. Schutzfunktionen verhindern.
            </p>

            <h2>6. Google Fonts</h2>
            <p>
              Diese Website lädt die Schriftart Montserrat über Google Fonts.
              Anbieter ist Google Ireland Limited, Gordon House, Barrow Street,
              Dublin 4, Irland. Beim Abruf der Schriftdateien kann Ihr Browser
              Verbindung zu Servern von Google aufnehmen. Dabei werden
              insbesondere Ihre IP-Adresse, die angeforderte URL und technische
              HTTP-Header wie User-Agent und Referrer an Google übermittelt.
            </p>
            <p>
              Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer
              einheitlichen, performanten und ansprechenden Darstellung der
              Website. Weitere Informationen finden Sie in den
              Datenschutzhinweisen zu Google Fonts:{" "}
              <a
                href="https://developers.google.com/fonts/faq/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/fonts/faq/privacy
              </a>
              .
            </p>

            <h2>7. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von
              Ihnen übermittelten Daten, insbesondere Ihre E-Mail-Adresse, Ihren
              Namen, den Inhalt Ihrer Nachricht und gegebenenfalls weitere von
              Ihnen freiwillig angegebene Informationen. Die Verarbeitung
              erfolgt zur Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage auf den Abschluss oder die Durchführung eines Vertrags
              gerichtet ist. In allen übrigen Fällen ist Rechtsgrundlage Art. 6
              Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
              sachgerechten Bearbeitung von Anfragen. Sofern Sie uns eine
              Einwilligung erteilt haben, ist Rechtsgrundlage Art. 6 Abs. 1 lit.
              a DSGVO.
            </p>
            <p>
              Die Daten werden gelöscht, sobald Ihre Anfrage abschließend
              bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten
              oder sonstigen berechtigten Gründe für eine weitere Speicherung
              bestehen.
            </p>

            <h2>8. Externe Links und Drittanbieter</h2>
            <p>
              Unsere Website enthält Links zu externen Angeboten, insbesondere
              zu Luma, Tally, LinkedIn, Facebook, Instagram und weiteren
              Webseiten. Wenn Sie einen solchen Link anklicken, verlassen Sie
              unsere Website. Für die anschließende Verarbeitung
              personenbezogener Daten ist grundsätzlich der jeweilige Anbieter
              verantwortlich.
            </p>
            <p>
              Bei Event-Anmeldungen über Luma, Bewerbungen über Tally oder der
              Nutzung von Social-Media-Angeboten können personenbezogene Daten
              an die jeweiligen Anbieter übermittelt und dort verarbeitet
              werden. Bitte informieren Sie sich vor Nutzung dieser Angebote in
              den Datenschutzhinweisen der jeweiligen Anbieter.
            </p>

            <h2>9. Cookies und lokaler Speicher</h2>
            <p>
              Diese Website setzt nach derzeitigem Stand keine eigenen Cookies
              für den regulären Websitebetrieb. Für die oben beschriebene
              Reichweitenmessung können jedoch Informationen im lokalen Speicher
              Ihres Browsers gespeichert werden. Der lokale Speicher kann über
              die Einstellungen Ihres Browsers gelöscht werden.
            </p>
            <p>
              Soweit technisch notwendige Speicher- oder Zugriffsvorgänge
              erfolgen, ist Rechtsgrundlage § 25 Abs. 2 TDDDG. Soweit Speicher-
              oder Zugriffsvorgänge nicht technisch notwendig sind und eine
              Einwilligung erforderlich ist, ist Rechtsgrundlage § 25 Abs. 1
              TDDDG in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <h2>10. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für
              die jeweiligen Zwecke erforderlich ist. Danach werden die Daten
              gelöscht oder anonymisiert, sofern keine gesetzlichen
              Aufbewahrungspflichten oder berechtigten Interessen, insbesondere
              zur Rechtsverfolgung oder Beweissicherung, entgegenstehen.
            </p>

            <h2>11. Ihre Rechte</h2>
            <p>
              Sie haben nach Maßgabe der gesetzlichen Voraussetzungen
              insbesondere folgende Rechte:
            </p>
            <ul>
              <li>Recht auf Auskunft nach Art. 15 DSGVO</li>
              <li>Recht auf Berichtigung nach Art. 16 DSGVO</li>
              <li>Recht auf Löschung nach Art. 17 DSGVO</li>
              <li>
                Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO
              </li>
              <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
              <li>Recht auf Widerspruch nach Art. 21 DSGVO</li>
              <li>
                Recht auf Widerruf einer erteilten Einwilligung nach Art. 7 Abs.
                3 DSGVO
              </li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte können Sie uns unter{" "}
              <a href="mailto:info+website@teg-ev.de">info+website@teg-ev.de</a>{" "}
              kontaktieren.
            </p>

            <h2>12. Widerspruchsrecht nach Art. 21 DSGVO</h2>
            <p>
              Wenn wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die
              sich aus Ihrer besonderen Situation ergeben, jederzeit gegen diese
              Verarbeitung Widerspruch einzulegen. Wir verarbeiten die
              betroffenen personenbezogenen Daten dann nicht mehr, es sei denn,
              wir können zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen,
              oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen.
            </p>
            <p>
              Werden personenbezogene Daten verarbeitet, um Direktwerbung zu
              betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
              Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
              derartiger Werbung einzulegen.
            </p>

            <h2>13. Beschwerderecht bei einer Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen Datenschutzrecht verstößt. Zuständig
              kann insbesondere die Aufsichtsbehörde Ihres gewöhnlichen
              Aufenthaltsortes, Ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes sein.
            </p>
            <p>
              Für nicht-öffentliche Stellen in Bayern ist regelmäßig zuständig:
            </p>
            <p>
              Bayerisches Landesamt für Datenschutzaufsicht
              <br />
              Promenade 18
              <br />
              91522 Ansbach
              <br />
              Website:{" "}
              <a
                href="https://www.lda.bayern.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.lda.bayern.de/
              </a>
            </p>

            <h2>14. Datensicherheit</h2>
            <p>
              Diese Website nutzt TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres
              Browsers. Wir treffen angemessene technische und organisatorische
              Maßnahmen, um personenbezogene Daten gegen Verlust, Missbrauch,
              unbefugten Zugriff und Veränderung zu schützen.
            </p>

            <h2>15. Aktualisierung dieser Datenschutzerklärung</h2>
            <p>
              Wir passen diese Datenschutzerklärung an, wenn sich die
              eingesetzten Dienste, die Datenverarbeitung oder die rechtlichen
              Anforderungen ändern. Die jeweils aktuelle Version ist auf dieser
              Website abrufbar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
