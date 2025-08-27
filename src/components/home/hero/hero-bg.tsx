"use client";

import {motion, MotionValue} from "motion/react";

const heroBg = "/images/hero-video.mp4";

export default function HeroBg({bgGradient}: {bgGradient: MotionValue<string>}) {
    return (
        <>
            <div className="absolute top-0 left-0 right-0 h-20 w-full bg-gradient-to-b from-light "></div>
            <motion.div
                className="absolute inset-0 mt-0.5  w-full h-full z-10"
                style={{
                    background: bgGradient,
                }}
            />

            <video
                src={heroBg}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover pointer-events-none"
            ></video>
        </>
    );
}
