import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC<{
  switchLanguage: (lang: "en" | "de") => void;
}> = ({ switchLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mergeActive, setMergeActive] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isAboutPage ? window.innerHeight * 0.85 : 48;
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Desktop only: once the compliment video section takes over the lower
      // viewport, fade the fixed navbar out so the dropping header reads as the
      // header relocating into the footer.
      let isMerge = false;
      if (isAboutPage && window.innerWidth >= 768) {
        const videoEl = document.getElementById("compliment-video-section");
        if (videoEl) {
          const rect = videoEl.getBoundingClientRect();
          isMerge = rect.top < window.innerHeight * 0.8;
        }
      }
      setMergeActive((prev) => (prev !== isMerge ? isMerge : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, isAboutPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        scrolled={scrolled}
        switchLanguage={switchLanguage}
        hidden={mergeActive}
      />
      <main className="flex-grow [overflow-x:clip]">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
