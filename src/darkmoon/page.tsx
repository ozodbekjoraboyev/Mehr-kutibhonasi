"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Moon02Icon from "../../public/moon-02-stroke-rounded (1)";
import Sun03Icon from "../../public/sun-03-stroke-rounded (1)";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 w-20 h-10 flex items-center bg-gray-200 dark:bg-gray-800 rounded-full transition relative"
    >
      <motion.div
        className="absolute w-8 h-8   rounded-full flex items-center justify-center"
        animate={{ x: darkMode ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {darkMode ? <Sun03Icon size={20} className="text-yellow-400" /> : <Moon02Icon size={20} className="text-blue-700" />}
      </motion.div>
    </button>
  );
}