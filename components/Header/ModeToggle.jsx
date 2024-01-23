"use client";
import { DarkMode, LightMode } from "../Icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return <div className="w-[36px] h-[36px] bg-black rounded-full"></div>;
  return (
    <button
      className="relative cursor-pointer"
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <DarkMode className="scale-100 dark:scale-0" />
      <LightMode className="absolute top-0 scale-0 dark:scale-100" />
    </button>
  );
};

export default ModeToggle;
