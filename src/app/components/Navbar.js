// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <div className ="w-full bg-red-800 p-4 flex justify-between">
    <div className="relative md:w-16 md:h-16 w-10 h-10 ">
    <Image src="/vercel.svg" fill></Image>
    </div>
     {/* Botones en móvil → menú hamburguesa */}
    <div className="md:hidden align-center justify-center">
        <button className="text-white text-3xl px-2 h-full">☰</button>
    </div>

    <nav className="hidden md:flex gap-4 justify-center flex-grow text-l text-black">
        <NavButton href="/"> Home </NavButton>
        <NavButton href="/about"> About </NavButton>
        <NavButton href="/contact"> Contact </NavButton>
    </nav>
    </div>
  );
};


