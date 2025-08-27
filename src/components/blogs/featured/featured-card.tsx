"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface Article {
    image: string;
    title: string;
    tags: string[];
    date: string;
    author: string;
}

export default function FeaturedCard({article}: {article: Article}) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/blogs/your-slug-here`)}
            className="p-4 cursor-pointer border border-black/20 font-roobert tracking-wide text-black/60 font-light flex flex-col"
        >
            <div>
                <Image
                    width={500}
                    height={250}
                    src={article.image}
                    alt={article.title}
                    className="w-full h-60 object-cover"
                />
            </div>

            <div className="mt-4 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between ">
                        <div className="flex gap-2 ">
                            {article.tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="text-xs h-5 flex items-center justify-center border border-dashed border-black/30 px-3 leading-none"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="text-sm ">{article.date}</div>
                    </div>
                    <h3 className="text-black/80 font-medium  text-xl mt-5 mb-10 ">{article.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-dashed border-black/30 leading-none text-center rounded-full flex items-center justify-center">
                        <span className="text-xs shrink-0 pl-0.5 font-medium">{article.author.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{article.author}</span>
                </div>
            </div>
        </div>
    );
}
