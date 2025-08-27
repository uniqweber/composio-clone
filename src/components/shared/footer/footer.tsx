import LegalLinks from "./legal-links";
import SocialLinks from "./social-links";
import PageLinks from "./page-links";
import Image from "next/image";
import {DesktopWatermarkText, MobileWatermarkText} from "./watermark-text";

const logo = "/images/logo-icon.svg";
export default function Footer() {
    return (
        <div className="bg-[#0F0F0F] overflow-hidden">
            <div className=" padding-x pt-14 text-white relative">
                <div className="grid gap-20 md:gap-0 md:grid-cols-6">
                    <div className="md:col-span-3">
                        <Image src={logo} alt="Logo" width={40} height={40} className="h-10" />
                        <h4 className="font-tinos mt-20 text-5xl tracking-wide">
                            Stay updated<span className="inline-block bg-white size-1.5 ml-1"></span>
                        </h4>
                        <button className="bg-white text-black font-roobert-mono tracking-wider mt-7 h-10 w-full md:w-auto px-20 uppercase">
                            join discord
                        </button>
                    </div>
                    <PageLinks />
                    <MobileWatermarkText />
                </div>
                <div className="pt-28 pb-10 md:pb-20 flex flex-col md:flex-row items-center justify-between gap-4 ">
                    <SocialLinks />
                    <LegalLinks />
                </div>
            </div>

            <DesktopWatermarkText />
        </div>
    );
}
