import umami from "umami";

export const handleGAButtonClick = (buttonText: string, source: string) => {
  const deviceType = window.innerWidth <= 768 ? "Mobile" : "Desktop";
  umami.track("CTA-click", {
    button: buttonText,
    source,
    device: deviceType,
  });
};
