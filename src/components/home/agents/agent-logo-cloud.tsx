const altera = "/images/altera.png";
const asu = "/images/asu-university.svg";
const context = "/images/context.svg";
const glean = "/images/glean.svg";
const letta = "/images/letta.svg";

import AgentLogo from "./agent-logo";

const logos = [altera, glean, asu, context, letta];

export default function AgentsLogoCloud() {
    return (
        <div className="  max-w-screen-xl mx-auto   overflow-hidden xl:pb-5 my-32">
            <div className="w-full">
                <h2 className="font-roobert font-light tracking-wide text-lg mb-10 text-center">Used by Agents from</h2>
                <div className="relative w-full  py-2">
                    <div className=" bg-gradient-to-l from-light to-transparent z-10 absolute right-0 top-0 bottom-0 w-40"></div>
                    <div className=" bg-gradient-to-r from-light to-transparent z-10 absolute left-0 top-0 bottom-0 w-40"></div>
                    <div className="animate-slide flex items-center  w-max px-4 divide-x">
                        {[...Array(10)]
                            .flatMap(() => logos)
                            .map((logo, index) => (
                                <AgentLogo key={index} logo={logo} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
