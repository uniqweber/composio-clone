import CompareHead from "./compare-head";
import CompareForEnterprises from "./compare-for-enterprises";
import CompareCard from "./compare-card";
import {pricingData} from "@/constants/pricing";

export default function PriceCompare() {
    return (
        <div className="padding-x">
            <CompareHead />
            <div className="lg:max-w-5xl 2xl:max-w-6xl mx-auto px-0 lg:px-4 xl:px-0 space-y-4 xl:space-y-5 ">
                <div className=" grid lg:grid-cols-3 gap-4 xl:gap-5">
                    {pricingData.map((item) => (
                        <CompareCard key={item.title} item={item} />
                    ))}
                </div>
                <CompareForEnterprises />
            </div>
        </div>
    );
}
