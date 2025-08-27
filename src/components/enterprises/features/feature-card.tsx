"use client"

import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

interface FeatureCardProps {
    defaultImg: string;
    changedImg: string;
    title: string;
}

export default function FeatureCard({defaultImg, changedImg, title}: FeatureCardProps) {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionMiddle = rect.top + rect.height / 2;
                const screenMiddle = window.innerHeight / 2;

                setInView(sectionMiddle < screenMiddle);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={sectionRef} className="border p-2.5">
            <Image
                alt="Features"
                src={inView ? changedImg : defaultImg}
                width={500}
                height={500}
                unoptimized
                className={`w-full h-auto object-cover transition-all duration-500 ease-in-out ${
                    inView ? "pixel-fade" : ""
                }`}
            />
            <h2 className="text-xl font-tinos mt-2">{title}</h2>
        </div>
    );
}
