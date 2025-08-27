"use client";

import {footerNavigation} from "@/constants/navigation";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function PageLinks() {
    const pathname = usePathname();
    return (
        <nav className="grid gap-20  md:gap-0 md:grid-cols-3 md:col-span-3 relative">
            {footerNavigation.map((section) => (
                <div key={section.title} className="">
                    <h3 className="mb-5 text-xs font-roobert-mono text-white/50 tracking-wider font-light">
                        {section.title}
                    </h3>
                    <ul className="space-y-2 t font-roobert-mono font-light">
                        {section.links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.path}
                                    className={`text-white ${pathname === link.path ? "underline" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
}
