import Image from "next/image";
import React from "react";

const heroBg = "/images/enterprises-hero-bg.png";
const textBg = "/images/enterprises-hero-text-bg.svg";

export default function Scalable() {
    return (
        <div className="h-[60vh] sm:h-[70vh] lg:h-[60vh] xl:h-[70vh] relative">
            <Image width={1920} height={1080} src={heroBg} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 padding-x flex items-center justify-center text-center">
                <div className="pb-16">
                    <div className="relative px-8">
                        <h2 className="text-4xl lg:pt-5  lg:text-6xl font-tinos text-black/80 ">Scalable agentic solutions</h2>
                        <Image src={textBg} alt="" className="absolute inset-0 h-auto w-auto" width={0} height={0}  />
                    </div>
                    <p className="font-roobert tracking-wide font-light lg:text-2xl mt-2 lg:mt-4">
                        Secure, reliable and accurate LLM <br /> integrations at scale.
                    </p>
                    <button className="px-24 font-roobert-mono font-light uppercase mt-6 w-full lg:mt-8 md:w-auto py-2 bg-black text-white text-sm">Book a call</button>
                </div>
            </div>
        </div>
    );
}
