import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC<{
  switchLanguage: (lang: "en" | "de") => void;
}> = ({ switchLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // Pages whose hero is designed to sit BEHIND the transparent navbar.
  const immersiveHeroRoutes = ["/about"];
  const isImmersive = immersiveHeroRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} switchLanguage={switchLanguage} />
      <main
        className={`flex-grow overflow-x-hidden ${
          isImmersive ? "pt-0" : "pt-16 md:pt-24 lg:pt-28"
        }`}
      >
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
