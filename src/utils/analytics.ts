import ReactGA from 'react-ga4';

export const handleGAButtonClick = (buttonText: string) => {
  ReactGA.event({
    category: 'Button',
    action: 'Click',
    label: buttonText,
  });
};
