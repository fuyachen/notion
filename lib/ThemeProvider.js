"use client";
import { ThemeProvider } from "next-themes";

const Provider = ({ children, ...props }) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default Provider;
