"use client";
import Logo from "./Logo";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { Menu } from "../Icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 px-6 mb-5 sm:mb-8">
      <Logo />
      <nav className="absolute left-1/2 -translate-x-1/2">
        <Menu className="w-10 h-10 block sm:hidden text-foreground" />
      </nav>
      <nav className="opacity-0 sm:opacity-100 absolute left-1/2 -translate-x-1/2 flex items-center gap-4 capitalize px-6 py-2 border border-solid rounded-full border-foreground">
        <Link href="/">home</Link>
        <Link href="/work">work</Link>
        <Link href="/blog">blog</Link>
        <Link href="/about">about</Link>
      </nav>
      <ModeToggle />
    </header>
  );
};

export default Header;
