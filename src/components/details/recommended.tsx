"use client"

import {blogs} from "@/constants/blogs";
import {useRouter} from "next/navigation";

export default function Recommended() {
    const router = useRouter();

    return (
        <section className="max-w-screen-2xl mx-auto padding-x  pb-32 font-roobert tracking-wide">
            <h2 className="text-2xl font-bold text-black/90  ">Recommended Blogs</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {blogs.slice(0, 4).map((blog, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(`/blogs/your-slug-here`)}
                        className="p-4 hover:bg-white/60  border border-black/20 font-roobert tracking-wide text-black/60 font-light flex flex-col cursor-pointer"
                    >
                        <div className=" h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between ">
                                    <div className="flex gap-2 ">
                                        {blog.tags.map((tag) => (
                                            <div
                                                key={tag}
                                                className="text-xs h-5 flex items-center justify-center border border-dashed border-black/30 px-3 leading-none"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm ">{blog.date}</div>
                                </div>
                                <h3 className="text-black/80 font-medium  text-xl mt-5 mb-10 ">{blog.title}</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 border border-dashed border-black/30 leading-none text-center rounded-full flex items-center justify-center">
                                    <span className="text-xs shrink-0 pl-0.5 font-medium">{blog.author.charAt(0)}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{blog.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
