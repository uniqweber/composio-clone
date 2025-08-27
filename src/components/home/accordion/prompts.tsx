"use client"

import Image from "next/image";
import {motion} from "motion/react";
import {FaCheck} from "react-icons/fa6";
import type {Variants} from "motion/react";

const github = "/images/github.svg";
const discord = "/images/discord.svg";
const calendar = "/images/calender.webp";


export default function Prompts() {
 const containerVariants: Variants = {
     hidden: {},
     show: {
         transition: {
             staggerChildren: 0.15,
         },
     },
 };

 const itemVariants: Variants = {
     hidden: {opacity: 0, y: 10},
     show: {opacity: 1, y: 0, transition: {duration: 0.4, ease: "easeOut"}},
 };
    return (
        <>
            <h2 className="font-tinos text-2xl xl:text-4xl max-w-sm">
                Turn bugs on Discord thread into Github issues and sync with Calendar events.
            </h2>
            <div className="flex items-center gap-5 mt-5">
                <h2 className="text-black/50 ">Toolkits required</h2>
                <div className="flex items-center gap-3">
                    <Image src={discord} alt="" width={28} height={24} className="h-6 w-auto" />
                    <Image src={github} alt="" width={28} height={24} className="h-6 w-auto" />
                    <Image src={calendar} alt="" width={28} height={24} className="h-6 w-auto" />
                </div>
            </div>
            <motion.div
                className="space-y-1 mt-10 text-green-700 pb-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {["bug details extracted", "issues created", "'bug bash' events added", "notifications sent"].map(
                    (item, i) => (
                        <motion.div key={i} className="flex items-center gap-2 justify-between"  variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <FaCheck />
                                <span>{item}</span>
                            </div>
                            {i === 3 && (
                                <div className="lg:flex items-center hidden gap-2">
                                    <span className="text-black/50">time taken →</span>
                                    <span className="text-black">55secs</span>
                                </div>
                            )}
                        </motion.div>
                    )
                )}
            </motion.div>
        </>
    );
}
