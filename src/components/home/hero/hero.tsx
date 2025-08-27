"use client";
import {useRef} from "react";
import {motion, useMotionTemplate, useScroll, useTransform} from "framer-motion";

import HeroCTA from "./hero-CTA";
import HeroBg from "./hero-bg";
import Image from "next/image";

const textBg = "/images/enterprises-hero-text-bg.svg";
export default function Hero() {
    const textRef = useRef(null);
    const {scrollY} = useScroll();

    const bgOpacity = useTransform(scrollY, [0, 300], [0, 1]);
    const bgGradient = useMotionTemplate`linear-gradient(to top, rgba(247,244,240,${bgOpacity}) 0%, rgba(247,244,240,${bgOpacity}) 100%)`;

    return (
        <div className="relative h-[calc(100vh-70px)] overflow-hidden">
            <HeroBg bgGradient={bgGradient} />

            {/* Text + Buttons */}
            <div className="absolute inset-0 padding-x flex items-center md:justify-center z-20">
                <div className="w-full md:w-auto pb-20 " ref={textRef}>
                    <div className="relative md:px-8 overflow-hidden">
                        <motion.h2
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.3, duration: 0.8, ease: "easeOut"}}
                            className="text-3xl lg:pt-2 md:text-6xl 2xl:text-7xl font-tinos text-black/70"
                        >
                            Skills that <span className="font-medium text-black/90 italic">envelope</span> for
                        </motion.h2>
                        <Image src={textBg} alt="" className="absolute inset-0 h-auto w-auto" width={0} height={0}  />
                    </div>

                    <div className="md:px-8 flex flex-col lg:flex-row md:items-start md:mt-2 gap-10 overflow-hidden">
                        <motion.h2
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.5, duration: 0.8, ease: "easeOut"}}
                            className="text-3xl md:text-6xl 2xl:text-7xl font-tinos text-black/90 shrink-0"
                        >
                            your <span className="font-medium">Agents</span>
                        </motion.h2>
                        <motion.p
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.7, duration: 0.8, ease: "easeOut"}}
                            className="font-roobert tracking-wide font-light text-xl 2xl:text-2xl w-full md:pt-6"
                        >
                            More than just integrations, <span className="font-bold">10,000+ tools </span> that
                            <br className="hidden md:block" />
                            can adapt — turning automation into intuition.
                        </motion.p>
                    </div>

                    <HeroCTA />
                </div>
            </div>
        </div>
    );
}
