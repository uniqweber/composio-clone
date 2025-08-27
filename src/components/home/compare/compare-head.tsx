import Image from "next/image";
const textBg = "/images/enterprises-info-text-bg.png";

export default function CompareHead() {
    return (
        <div>
            <div className="relative pt-20 mt-10 mb-20 md:mt-0 md:pt-0 md:h-84  w-full mx-auto flex items-end md:pl-20  max-w-4xl">
                <div className="w-full pb-4">
                    <h2 className="text-4xl md:text-6xl 2xl:text-7xl  font-tinos text-black/80 ">
                        <span className="italic">Usage based</span> <br /> Pricing
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center gap-5 w-full mt-2 lg:mt-6">
                        <p className="font-roobert w-full text-black/40 tracking-wide font-light lg:text-lg 2xl:text-xl ">
                            Composio is built to help yo scale. From <br /> the birth of your first agent to your IPO,{" "}
                            <br /> we&apos;re there to grow with you.
                        </p>
                        <a
                            href="https://composio.dev/install"
                            target="_blank"
                            className=" w-full md:w-auto md:shrink-0 px-20 py-2  2xl:py-3 md:text-lg group bg-black text-white flex items-center gap-3 justify-center  font-roobert-mono uppercase  tracking-wide text-center"
                        >
                            <span className="font-tinos md:text-xl">&#8594;</span>
                            <span className="group-hover:underline">Compare Plans</span>
                        </a>
                    </div>
                </div>
                <Image width={500} height={300} src={textBg} alt="" className=" h-full w-auto object-cover opacity-20  absolute inset-0" />
            </div>
        </div>
    );
}
