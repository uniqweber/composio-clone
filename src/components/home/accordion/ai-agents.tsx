import Image from "next/image";

const img_01 = "/images/crow-link.png";
const img_02 = "/images/crow-connect.png";
const img_03 = "/images/ag.png";
const img_04 = "/images/vercel.png";
const img_05 = "/images/clay.png";

const tools = [img_01, img_02, img_03, img_04, img_05];

export default function AIAgents() {
    return (
        <div className="font-roobert">
            <h2 className="">
                Connect with over 25 agentic frameworks, allowing AI agents to autonomously plan, coordinate, and
                execute actions across tools while your agent focuses on planning and execution is handled seamlessly.
            </h2>
            <div className="mt-6 mb-24 flex items-center justify-end gap-3 text-black/50 ">
                {tools.map((tool, index) => (
                    <Image key={index} src={tool} alt="Tools" width={28} height={28} className="h-7 w-auto bg-light" />
                ))}
            </div>
        </div>
    );
}
