import umami from "umami";

/**
 * Track a CTA or button click.
 */
export const trackButtonClick = (buttonText: string, source: string) => {
  const deviceType = window.innerWidth <= 768 ? "Mobile" : "Desktop";
  umami.track("CTA-click", {
    button: buttonText,
    source,
    device: deviceType,
  });
};

/**
 * Track outbound link clicks.
 */
export const trackOutboundClick = (url: string, location: string) => {
  umami.track("outbound-link-click", {
    url,
    location,
    device: window.innerWidth <= 768 ? "Mobile" : "Desktop",
  });
};

/**
 * Track language switch.
 */
export const trackLanguageSwitch = (lang: string, location: string) => {
  umami.track("language-switch", {
    lang,
    location,
    device: window.innerWidth <= 768 ? "Mobile" : "Desktop",
  });
};
