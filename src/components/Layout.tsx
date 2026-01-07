"use client";

import React, { useState, useEffect, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

type LayoutProps = {
  children: ReactNode;
  switchLanguage: (lang: "en" | "de") => void;
};

function Layout({ children, switchLanguage }: LayoutProps) {
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
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} switchLanguage={switchLanguage} />
      <main className="flex-grow pt-16 md:pt-24 lg:pt-28 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
