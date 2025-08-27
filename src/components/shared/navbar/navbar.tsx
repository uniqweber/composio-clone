"use client";

import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import Image from "next/image";
import {pageNavigation} from "@/constants/navigation";

const logo = "/images/logo.svg";
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-light fixed top-0 left-0 right-0 z-50 font-roobert-mono font-light">
            <div className="h-17.5 flex items-center justify-between gap-10 padding-x">
                <Link href={"/"}>
                    <Image src={logo} alt="Logo" width={200} height={32} className="h-7 w-auto" />
                </Link>

                <nav className="hidden md:flex items-center gap-10 uppercase text-sm tracking-wider text-black/80">
                    {pageNavigation.map((page) => (
                        <Link key={page.label} href={page.path} className="hover:underline">
                            {page.label}
                        </Link>
                    ))}
                </nav>

                <button className="hidden md:block bg-black text-white uppercase text-sm px-2.5 py-1">Sign In</button>

                <button className="md:hidden text-2xl text-black" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </header>
    );
}
