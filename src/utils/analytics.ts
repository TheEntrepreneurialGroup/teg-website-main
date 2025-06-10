import ReactGA from 'react-ga4';

export const handleGAButtonClick = (buttonText: string, source: string) => {
  const deviceType = window.innerWidth <= 768 ? 'Mobile' : 'Desktop'; // Determine device type based on screen width

  ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: `${buttonText} | Source: ${source} | Device: ${deviceType}`,
  });
};
