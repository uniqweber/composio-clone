import {ReactNode} from "react";

interface BenefitCardProps {
    title: string;
    subtitle: ReactNode;
    children: ReactNode;
}

export default function BenefitCard({title, subtitle, children}: BenefitCardProps) {
    return (
        <div className="w-full py-4 pointer-events-none lg:pointer-events-auto relative lg:h-60 flex lg:flex-col items-center group lg:justify-center lg:hover:bg-white duration-500 font-roobert lg:text-center flex-row">
            <div className="">{children}</div>
            <div>
                <h2 className="text-xl leading-none mb-1.5">{title}</h2>
                <p className="font-light text-lg text-black/60 leading-6.5 ">{subtitle}</p>
            </div>
        </div>
    );
}
