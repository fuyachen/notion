"use client";
import Logo from "./Logo";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 px-6">
      <Logo />
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 capitalize px-6 py-2 border border-solid rounded-full border-foreground">
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
