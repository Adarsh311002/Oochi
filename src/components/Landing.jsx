import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Landing = () => {
    
    return(
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-52 px-20">

                {["WE Create", "Eye-opening", "presentations"].map((items,index) => {
                    return <div className="masker">
                        <div className="w-fit flex items-end overflow-hidden">
                          {index === 1 && (
                            <motion.div 
                            initial={{width:0}} 
                            animate={{width:"8vw"}} 
                            transition={{ease:[0.76, 0, 0.24, 1],duration:1}} 
                            className="mr-[1vw] h-[5vw] w-[8vw] rounded-md relative bg-red-500">
                            </motion.div>
                          )}
                        <h1 key={index} className=" uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-semibold font-['Founder Grotesk']">{items}</h1>
                        </div>
                    
                </div>
                })}
               
            </div>
            <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item,index) => (
                    <p key={index} className="text-md font-['Neue Montreal'] font-light tracking-tighter leading-none">{item}</p>
                ))}

                <div className="start flex items-center gap-5 py-3">
                    <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full uppercase">START THE PROJECT</div>
                    <div className="flex items-center justify-center w-9 h-9 border-[1px] border-zinc-400 rounded-full">
                        <BsArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    )
  
} 

export default Landing;