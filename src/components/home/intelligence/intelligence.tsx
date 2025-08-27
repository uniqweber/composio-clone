"use client"

import {useState} from "react";

import Image from "next/image";
import BashCode from "./bash-code";

const bg = "/images/pricing-reward-bg.png";
export default function Intelligence() {
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
            <Image src={bg} width={2000} height={2000} alt="" className="h-[92vh] w-full object-cover" />

            <div className="absolute inset-0 flex flex-col md:items-center justify-center md:text-center px-6">
                <h2 className="font-tinos text-4xl md:text-6xl 2xl:text-7xl font-medium text-gray-800">
                    Life rewards <br className="md:hidden" /> <span className="italic">action</span> <br /> not
                    intelligence
                </h2>

                <BashCode handleCopy={handleCopy} copied={copied} />
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mt-10 max-w-xl 2xl:max-w-2xl w-full">
                    <a
                        href="https://composio.dev/install"
                        target="_blank"
                        className="  w-full py-2 2xl:py-3   bg-black text-white font-roobert-mono uppercase font-light tracking-wide hover:underline text-center"
                    >
                        Sign In
                    </a>
                    <a
                        href="https://composio.dev/install"
                        target="_blank"
                        className="  w-full py-2  2xl:py-3  group bg-white text-black flex items-center gap-3 justify-center border border-black font-roobert-mono uppercase  tracking-wide text-center"
                    >
                        <span className="font-tinos md:text-xl">&#8594;</span>{" "}
                        <span className="group-hover:underline">Explore Docs</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
