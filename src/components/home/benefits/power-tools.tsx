import React from "react";
import BenefitCard from "./benefit-card";

export default function PowerTools() {
    return (
        <BenefitCard
            title="Power of Thousands of Tools "
            subtitle={
                <>
                    in the palm of <br /> your agent’s hands.
                </>
            }
        >
            <div className="h-20 w-20 flex items-center justify-center relative ">
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-2 top-2 lg:group-hover:left-5 lg:left-3 lg:group-hover:top-5 lg:top-3 z-[4]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-3 top-3 lg:group-hover:left-4 lg:left-0 lg:group-hover:top-4 lg:top-0 z-[3]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-4 top-4 lg:group-hover:left-3 lg:-left-3 lg:group-hover:top-3 lg:-top-3 z-[2]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-5 top-5 lg:group-hover:left-2 lg:-left-6 lg:group-hover:top-2 lg:-top-6 z-[1] "></div>
                <div className="size-7 border-2 border-black rounded-md"></div>
            </div>
        </BenefitCard>
    );
}
