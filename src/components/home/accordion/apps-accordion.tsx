"use client"
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import Prompts from "./prompts";
import Composio from "./composio";
import LLM from "./llm";
import AIAgents from "./ai-agents";

const img_01 = "/images/accordion-01.png";
const img_02 = "/images/accordion-02.png";
const img_03 = "/images/accordion-03.png";
const img_04 = "/images/accordion-04.png";


const accordionData = [
    {
        id: 0,
        title: "Prompts",
        description: <Prompts />,
    },
    {
        id: 1,
        title: "Composio",
        description: <Composio />,
    },
    {
        id: 2,
        title: "LLM",
        description: <LLM />,
    },
    {
        id: 3,
        title: "AI Agents",
        description: <AIAgents />,
    },
];

const images  = [img_01, img_02, img_03, img_04];

export default function AppsAccordion() {
    const [current, setCurrent] = useState(0);

    return (
        <div className="lg:min-h-[700px] max-w-screen-xl padding-x mx-auto flex items-center justify-center">
            <div className="w-full grid lg:grid-cols-5 items-center duration-500 gap-5  xl:gap-20">
                <div className="lg:col-span-3 hidden lg:block relative w-full">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current}
                            src={images[current]}
                            alt=""
                            initial={{opacity: 0, scale: 0.95, rotate: -3}}
                            animate={{opacity: 1, scale: 1, rotate: 0}}
                            exit={{opacity: 0, scale: 1.05, rotate: 3}}
                            transition={{duration: 0.5, ease: "easeInOut"}}
                            className=""
                        />
                    </AnimatePresence>
                </div>
                <div className="lg:col-span-2  2xl:pl-10">
                    <div className="border hidden lg:block divide-y divide-black/20 border-black/20 font-roobert font-light tracking-wide">
                        {accordionData.map(({id, title, description}) => (
                            <div key={id} onClick={() => setCurrent(id)} className="p-4 cursor-pointer">
                                {!(current === id && id === 0) && (
                                    <div className="flex items-center justify-between text-black/60  ">
                                        <h2 className={`font-tinos xl:text-2xl text-xl font-light max-w-sm `}>
                                            {title}
                                        </h2>
                                        <span className="font-roobert text-xl xl:text-2xl ">
                                            {current === id ? "" : "+"}
                                        </span>
                                    </div>
                                )}

                                <AnimatePresence>
                                    {current === id && (
                                        <motion.div
                                            key={`desc-${id}`}
                                            initial={{opacity: 0, height: 0}}
                                            animate={{opacity: 1, height: "auto"}}
                                            exit={{opacity: 0, height: 0}}
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                            className="overflow-hidden"
                                        >
                                            <div className={!(current === id && id === 0) ? "pt-4" : ""}>
                                                {description}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className=" font-roobert font-light tracking-wide lg:hidden space-y-4">
                        {accordionData.map(({id, title, description}) => (
                            <div key={id} className="p-4  sticky top-18 bg-light cursor-pointer border border-black/20">
                                {!(id === 0) && (
                                    <h2 className={`font-tinos xl:text-2xl text-xl font-light max-w-sm `}>{title}</h2>
                                )}

                                <motion.div
                                    key={`desc-${id}`}
                                    initial={{opacity: 0, height: 0}}
                                    animate={{opacity: 1, height: "auto"}}
                                    exit={{opacity: 0, height: 0}}
                                    transition={{duration: 0.3, ease: "easeInOut"}}
                                    className="overflow-hidden"
                                >
                                    <div className={!(current === id && id === 0) ? "pt-4" : ""}>{description}</div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
