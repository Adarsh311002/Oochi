import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full  rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43] ">
            <div className="border-t-2 border-b-2 border-zinc-300 flex pr-10 whitespace-nowrap overflow-hidden">
                <motion.h1 
                initial={{x:"0"}}
                animate={{x:"-100%"}}
                transition={{repeat:Infinity,ease:"linear", duration:8}}
                className="text-[20vw] leading-none tracking-tighter uppercase pb-12 -mb-12 font-bold font-['Founder Grotesk'] pr-10">We are Ochi</motion.h1>
                <motion.h1 
                initial={{x:"0"}}
                animate={{x:"-100%"}}
                transition={{repeat:Infinity,ease:"linear", duration:8}}
                className="text-[20vw] leading-none tracking-tighter uppercase pb-12 -mb-12 font-bold font-['Founder Grotesk'] pr-10">We are Ochi</motion.h1>
            </div>
        </div>
    )
}

export default Marquee;