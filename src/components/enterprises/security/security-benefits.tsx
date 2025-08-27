import SOC from "./soc";
import RBAC from "./rbac";
import IPAllowList from "./ip-allow-list";
import AuditLogs from "./audit-logs";
import Image from "next/image";

const textBg = "/images/enterprises-info-text-bg.png";
export default function SecurityBenefits() {
    return (
        <div className="padding-x max-w-screen-xl mx-auto ">
            <div className="relative pt-20 mt-10 md:mt-0 md:pt-0 md:h-60  md:w-max mx-auto flex items-end md:pl-16">
                <div>
                    <h2 className="text-4xl md:text-5xl  font-tinos text-black/80 ">
                        <span className="italic">Enterprise-level</span> security
                    </h2>
                    <p className="font-roobert text-black/40 tracking-wide font-light lg:text-xl mt-2 lg:mt-4">
                        All the essentials your agent needs, <br /> ready to go from day one.
                    </p>
                </div>
                <Image
                    width={500}
                    height={300}
                    src={textBg}
                    alt="Text bg"
                    className=" h-full w-auto object-cover opacity-20  absolute inset-0"
                />
            </div>
            <div className="mt-16 divide-y divide-black/20">
                <div className="divide-y md:divide-y-0 md:divide-x grid md:grid-cols-2 divide-black/20">
                    <SOC />
                    <RBAC />
                </div>
                <div className="divide-y md:divide-y-0 md:divide-x grid md:grid-cols-2 divide-black/20">
                    <IPAllowList />
                    <AuditLogs />
                </div>
            </div>
        </div>
    );
}
