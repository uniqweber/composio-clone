"use client";
import {motion} from "motion/react";

export default function HeroCTA() {
    return (
        <motion.div
            className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 md:px-8 mt-10 md:mt-16"
            initial={{y: 40, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.9, duration: 0.8, ease: "easeOut"}}
        >
            <button className="uppercase font-roobert-mono font-light h-11 w-full lg:w-auto text-center justify-center  lg:px-20 bg-black text-white hover:underline">
                Get started for free
            </button>
            <button className="uppercase font-roobert-mono font-light h-11 w-full lg:w-auto text-center  justify-center lg:px-20 bg-white border text-black group flex items-center gap-3">
                <span className="text-lg font-tinos">&#8594;</span>
                <span className="group-hover:underline">Explore docs</span>
            </button>
        </motion.div>
    );
}
