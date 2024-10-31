"use client";

import Link from "next/link";

const Header = () => {
  //TODO: Add logo change color

  return (
    <header className="flex items-center h-[114px] px-3 bg-white sticky top-0 z-30">
      <div className="text-xl font-bold">
        <Link href="/">logo</Link>
        <div className="flex-grow"></div>
        <nav className="flex gap-16 justify-center items-center m-auto top-12 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="hover:text-default">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
