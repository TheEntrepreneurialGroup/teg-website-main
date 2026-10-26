import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC<{
  switchLanguage: (lang: "en" | "de") => void;
}> = ({ switchLanguage }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar switchLanguage={switchLanguage} />
    <main className="flex-grow [overflow-x:clip]">
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </main>
    <Footer />
  </div>
);

export default Layout;
