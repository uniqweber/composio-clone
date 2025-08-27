import PowerTools from "./power-tools";
import AgentAuth from "./agent-auth";
import SOC2Type from "./soc2-type";
import EvolvingSkill from "./evolving-skill";
import ComposioMCP from "./composio-mcp";
import AccurateTools from "./accurate-tools";

export default function Benefits() {
    return (
        <div className="padding-x max-w-screen-2xl my-32 lg:my-60 mx-auto ">
            <div className="mt-16 divide-y divide-black/20 relative">
                <div className="absolute hidden lg:block top-1/2  -translate-y-1/2 left-1/3  font-tinos border-none leading-none z-10">
                    <span className="-ml-[5px]">+</span>
                </div>
                <div className="absolute hidden lg:block top-1/2  -translate-y-1/2 right-1/3  font-tinos border-none leading-none z-10">
                    <span className="-mr-[4px]">+</span>
                </div>
                <div className="divide-y lg:divide-y-0 lg:divide-x grid lg:grid-cols-3 divide-black/20">
                    <PowerTools />
                    <AgentAuth />
                    <EvolvingSkill />
                </div>
                <div className="divide-y lg:divide-y-0 lg:divide-x grid lg:grid-cols-3 divide-black/20">
                    <ComposioMCP />
                    <AccurateTools />
                    <SOC2Type />
                </div>
            </div>
        </div>
    );
}
