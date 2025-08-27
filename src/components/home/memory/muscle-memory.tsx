"use client";

const bgOutline = "/images/muscle-circle-outline.png";
const bgFilled = "/images/muscle-bg-filled.webp";
const bgMobile = "/images/muscle-memory-mobile-bg.webp";

import {useEffect, useRef, useState} from "react";
import Badge from "./memory-badge";
import MemoryTextBox from "./memory-text-box";
import Image from "next/image";
import {badges} from "@/constants/muscleMemory";

export default function MuscleMemory() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionMiddle = rect.top + rect.height / 1;
                const screenMiddle = window.innerHeight / 1;

                setInView(sectionMiddle < screenMiddle);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={sectionRef} className="max-w-screen-xl mx-auto my-40 xl:my-60 padding-x relative">
            <Image
                alt="Muscle memory"
                src={inView ? bgFilled : bgOutline}
                width={2000}
                height={500}
                unoptimized
                className={`w-full h-auto object-contain transition-all duration-500 ease-in-out hidden lg:block ${
                    inView ? "pixel-fade -ml-10 scale-110" : ""
                }`}
            />

            <Image
                src={bgMobile}
                alt="muscle memory"
                width={2000}
                height={2000}
                className="h-[900px]  md:object-cover scale-105 w-full  lg:hidden"
            />
            <div className="grid lg:grid-cols-2 xl:gap-12 items-center  padding-x absolute inset-0">
                <MemoryTextBox />

                <div className=" font-roobert pb-10 px-6 lg:pb-0   flex flex-col lg:items-center justify-center gap-5 lg:gap-10 ">
                    {badges.map((badge, index) => (
                        <Badge
                            key={badge.title}
                            title={badge.title}
                            count={badge.count}
                            className={badge.className}
                            highlightColor={badge.color}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
