const toolsInfo = ["Authentication", "Manage triggers", "Set tools and actions", "Use multi-agents"];

export default function Composio() {
    return (
        <div className="font-roobert">
            <h2 className="">
                An all in one seamless layer that lets LLMs and agents reliably interact with tools in the real world.
            </h2>
            <div className="mt-6 mb-24 space-y-1 text-black/50 ">
                {toolsInfo.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="size-1.5 bg-black/30"></div>
                        <h3>{tool}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
