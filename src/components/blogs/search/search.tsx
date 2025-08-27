"use client";

import {useState} from "react";
import {GoSearch} from "react-icons/go";
const heroBg = "/images/blog-hero-bg.png";
const textBg = "/images/enterprises-hero-text-bg.svg";

import SearchModal from "./search-modal";
import {blogs} from "@/constants/blogs";
import Image from "next/image";

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const results = blogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <>
            <div className="min-h-[400px] h-[50vh] relative">
                <Image width={1920} height={1080} src={heroBg} alt="" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 padding-x flex items-center md:justify-center">
                    <div className="w-full md:w-auto">
                        <div className="relative md:px-8">
                            <h2 className="text-4xl lg:pt-2 lg:text-7xl font-tinos text-black/70">
                                Develop <span className="font-medium text-black/90">Ideas</span> into
                            </h2>
                            <Image src={textBg} alt="" className="absolute inset-0 h-auto w-auto" width={0} height={0}  />
                        </div>
                        <div className="md:px-8 flex flex-col md:flex-row md:items-start md:gap-10 mt-2">
                            <h2 className="text-4xl w-full lg:text-7xl font-tinos text-black/90 italic">
                                Integrations
                            </h2>
                            <p className="font-roobert tracking-wide font-light lg:text-2xl w-full pt-6">
                                Insights on bridging AI <br /> with <span className="font-bold">250+ integrations</span>
                                .
                            </p>
                        </div>
                        <div className="md:px-8 mt-8 w-full">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="h-14 border border-black hover:border-solid border-dashed duration-500 transition-all w-5/6 md:w-full md:max-w-xl bg-white flex items-center justify-between px-5 text-black/40 font-roobert font-light tracking-wide text-lg"
                            >
                                <span>Search through blogs</span>
                                <GoSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && <SearchModal query={query} setQuery={setQuery} results={results} setIsOpen={setIsOpen} />}
        </>
    );
}
