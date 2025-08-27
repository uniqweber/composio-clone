import Image from 'next/image';
import React from 'react'

export default function AgentLogo({logo}:{logo:string}) {
  return (
      <div className="relative border-y border-black/10 px-16 py-6">
          <Image src={logo} alt="logo" width={200} height={32} className="h-7 w-auto" />
          <span className="absolute -top-[8px] -right-[5px] font-tinos leading-none ">+</span>
          <span className="absolute -bottom-[8px] -right-[5px] font-tinos leading-none ">+</span>
      </div>
  );
}
