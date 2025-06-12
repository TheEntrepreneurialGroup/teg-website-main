import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC<{
  switchLanguage: (lang: "en" | "de") => void;
}> = ({ switchLanguage }) => {
  const [scrolled, setScrolled] = useState(false);

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
<<<<<<< HEAD
      <main className="flex-grow">
=======
      <main className="flex-grow pt-24 md:pt-28 lg:pt-30">
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
