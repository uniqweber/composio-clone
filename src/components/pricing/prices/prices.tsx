import React from "react";

import {pricingData} from "@/constants/pricing";
import UsageBasedPricing from "./usage-based-pricing";
import PriceCard from "./price-card";
import ForEnterprise from "./for-Enterprise-card";
import Image from "next/image";

const bg = "/images/pricing-hero-bg.png";
export default function Prices() {
    return (
        <div className="padding-x pb-4 xl:pb-5">
            <div className="relative pt-4 ">
                <Image
                    width={1920}
                    height={1080}
                    src={bg}
                    alt=""
                    className="min-h-[400px]  lg:object-center lg:h-[calc(100vh-300px)] xl:h-[calc(100vh-300px)]  2xl:h-[calc(100vh-320px)] w-full -mt-10 lg:-mt-0"
                    priority
                    unoptimized
                />
            </div>
            <div className="-mt-[300px] sm:-mt-[25vh] lg:-mt-[40vh] xl:-mt-[30vh] 2xl:-mt-[40vh] relative">
                <UsageBasedPricing />
                <div className="max-w-screen-lg mx-auto px-0 lg:px-4 xl:px-0 space-y-4 xl:space-y-5 ">
                    <div className=" grid lg:grid-cols-3 gap-4 xl:gap-5">
                        {pricingData.map((item) => (
                            <PriceCard key={item.title} item={item} />
                        ))}
                    </div>
                    <ForEnterprise />
                </div>
            </div>
        </div>
    );
}
