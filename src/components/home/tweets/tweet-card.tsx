import Image from "next/image";
import {FaXTwitter} from "react-icons/fa6";

interface TweetCardProps {
    name: string;
    avatar: string;
    content: string;
}


export function TweetCard({name, avatar, content}: TweetCardProps) {
    return (
        <div className="bg-light/40  p-3  h-72  font-roobert-mono relative">
            <div className="font-tinos absolute -top-[8px] -left-[4px] leading-none">
                +
            </div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <Image height={40} width={40} src={avatar} alt={`${name} avatar`} className="size-8 rounded-full" />
                    <div className="text-gray-900 text-sm">{name}</div>
                </div>
                <div className="flex items-center gap-2">
                    <FaXTwitter />
                    <span className="font-ibm">&#8599;</span>
                </div>
            </div>

            <div className="text-sm text-gray-700  ">{content}</div>
        </div>
    );
}
