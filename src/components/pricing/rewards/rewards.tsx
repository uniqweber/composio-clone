"use client"
import {useState} from "react";

import CopyButton from "./copy-button";
import Image from "next/image";
const bg = "/images/pricing-reward-bg.png";

export default function Rewards() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("curl -fsSL https://composio.dev/install | bash");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2500);
    };

    return (
        <div className="mt-10 lg:mt-24 relative">
            <Image src={bg} alt="" width={1920} height={1080} className="h-[calc(100vh-70px)] w-full object-cover" />

            <div className="absolute inset-0 flex flex-col md:items-center justify-center md:text-center px-6">
                <h2 className="font-tinos text-4xl md:text-6xl text-gray-800">
                    Life rewards <br className="md:hidden" /> <span className="italic">action</span> <br /> not intelligence
                </h2>

                {/* Show in above 768px */}
                <CopyButton handleCopy={handleCopy} copied={copied} />

                {/* Show in below 768px */}
                <a
                    href="https://composio.dev/install"
                    target="_blank"
                    className=" block md:hidden w-full mt-8 py-2 bg-black text-white font-roobert-mono uppercase text-sm tracking-wide hover:underline text-center"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
