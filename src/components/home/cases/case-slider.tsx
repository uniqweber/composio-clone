"use client";

import {MouseEvent, ReactNode, useState} from "react";
import {motion, useMotionValue, useSpring, AnimatePresence} from "framer-motion";
import Image from "next/image";

const waterMark = "/images/case-studies-card-watermark.png";
const bg = "/images/case-studies-card-bg.png";

type Highlight = {
    infoTitle: string;
    unit?: string;
    infoContent: string;
};

type CaseStudyType = {
    name: string;
    title: ReactNode;
    user: string;
    role: string;
    logo: string; 
    highlights: Highlight[];
};

type CaseSliderProps = {
    caseStudy: CaseStudyType;
};

export function CaseSlider({caseStudy}: CaseSliderProps) {
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position with motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const smoothX = useSpring(mouseX, {stiffness: 200, damping: 20});
    const smoothY = useSpring(mouseY, {stiffness: 200, damping: 20});

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - 10);
        mouseY.set(e.clientY - rect.top - 50);
    };

    return (
        <div
            className="relative cursor-pointer group max-w-xl xl:max-w-3xl p-6 md:px-20 md:pt-20 md:pb-28 mx-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Floating Button */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        className="pointer-events-none hidden lg:block absolute  z-50 px-4 py-1.5 bg-white border border-dashed border-black/40 rounded-lg text-black/50 text-sm font-roobert shadow-md"
                        style={{
                            x: smoothX,
                            y: smoothY,
                            pointerEvents: "none",
                            translateY: "-50%",
                            translateX: "-50%",
                        }}
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}
                        transition={{duration: 0.5, stiffness: 120, damping: 25}}
                    >
                        Read more
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background */}
            <Image
                src={bg}
                fill
                alt="background"
                className="lg:group-hover:opacity-100 opacity-20 size-full object-cover xl:size-auto xl:-top-10 xl:-left-10 absolute inset-0 duration-500"
            />
            <Image
                src={waterMark}
                alt="watermark"
                width={400}
                height={300}
                className="scale-55  md:scale-90 xl:scale-100 top-1/2 left-1/2 -translate-1/2 xl:-ml-4 lg:group-hover:opacity-0 duration-500  absolute inset-0 opacity-15"
            />

            {/* Content */}
            <div className="relative z-10 max-w-lg xl:max-w-[519px] w-full">
                <h3 className="text-black/40 font-roobert font-light mb-5">{caseStudy.name}</h3>

                <div className="mb-10">
                    <p className="text-2xl md:text-3xl xl:text-4xl font-ibm font-light text-black/60 md:leading-11 xl:leading-12">
                        {caseStudy.title}
                    </p>
                </div>

                <div className="flex items-center font-roobert gap-4 mb-10">
                    <Image src={caseStudy.logo} alt="user" className="size-6" width={24} height={24} />
                    <div>
                        <h4 className="text-black/60">{caseStudy.user}</h4>
                        <p className="text-xs text-black/40 font-light">{caseStudy.role}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 font-roobert">
                    {caseStudy.highlights.map((highlight, index) => (
                        <div key={index} className="text-center md:text-left">
                            <div className="text-2xl xl:text-4xl font-bold text-black mb-2">
                                {highlight.infoTitle}{" "}
                                {highlight.unit && (
                                    <span className="text-xl xl:text-2xl font-normal text-black/40">
                                        {highlight.unit}
                                    </span>
                                )}
                            </div>
                            <p className="text-black/40 mx-auto font-roobert-mono xl:text-xl">
                                {highlight.infoContent}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
