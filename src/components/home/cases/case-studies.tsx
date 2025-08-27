"use client";
import React, {useRef, useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperType} from "swiper";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {caseStudies} from "@/components/constants/cases";
import {CaseSlider} from "./case-slider";

export default function CaseStudies() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            const prevEl = prevRef.current;
            const nextEl = nextRef.current;

            if (prevEl && nextEl) {
                if (swiperInstance.params.navigation && typeof swiperInstance.params.navigation !== "boolean") {
                    swiperInstance.params.navigation.prevEl = prevEl;
                    swiperInstance.params.navigation.nextEl = nextEl;
                }

                if (swiperInstance.navigation) {
                    swiperInstance.navigation.destroy();
                    swiperInstance.navigation.init();
                    swiperInstance.navigation.update();
                }
            }
        }
    }, [swiperInstance]);

    return (
        <div className="relative max-w-screen-2xl mx-auto padding-x my-30 lg:my-60">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop
                speed={2000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: null, // Initially null, will be updated later
                    nextEl: null,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                }}
                onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    setTimeout(() => {
                        if (
                            prevRef.current &&
                            nextRef.current &&
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== "boolean"
                        ) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }, 100);
                }}
                className="testimonial-swiper"
            >
                {caseStudies.map((caseStudy, index) => (
                    <SwiperSlide key={index}>
                        <CaseSlider caseStudy={caseStudy} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-12">
                <div className="flex items-center gap-5 justify-center max-w-32 mx-auto text-black/50 ">
                    <button ref={prevRef}>
                        <FaAngleLeft />
                    </button>
                    <div className="custom-pagination flex justify-center gap-2"></div>
                    <button ref={nextRef}>
                        <FaAngleRight />
                    </button>
                </div>

                <button className="md:max-w-xs bg-black py-2 px-3 w-full group mx-auto text-white flex items-center gap-3 justify-center mt-10 font-roobert-mono font-light uppercase">
                    <span className="font-tinos leading-none text-xl">&#8594;</span>
                    <span className="group-hover:underline">Case Studies</span>
                </button>
            </div>
        </div>
    );
}
