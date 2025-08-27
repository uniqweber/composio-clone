import Image from "next/image";

const img_01 = "/images/gpt.png";
const img_02 = "/images/claude.png";
const img_03 = "/images/gemini.png";
const img_04 = "/images/quick.png";

const tools = [img_01, img_02, img_03, img_04];

export default function LLM() {
    return (
        <div className="font-roobert">
            <h2 className="">
                Composio listens to your LLM’s function or tool calls, handles authentication, maps the call to a
                real-world API, and executes it reliably.
            </h2>
            <div className="mt-6 mb-24 flex items-center justify-end gap-3 text-black/50 ">
                {tools.map((tool, index) => (
                    <Image key={index} src={tool} alt="Tools" width={28} height={28} className="h-7 w-auto bg-light"/>
                ))}
            </div>
        </div>
    );
}
