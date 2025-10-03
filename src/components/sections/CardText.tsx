import React from "react";
import CardTextDesktop from "../ui/CardTextDesktop";
import CardTextMobile from "../ui/CardTextMobile";

interface CardTextProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body?: string;
}

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 640); // sm breakpoint
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isDesktop;
};

const CardText: React.FC<CardTextProps> = (props) => {
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <CardTextDesktop {...props} />
  ) : (
    <CardTextMobile {...props} />
  );
};

export default CardText;
