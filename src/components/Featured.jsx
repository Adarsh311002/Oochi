import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {

    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({y : "0"})
    }
    
    return(
        <div className="w-full py-20">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-7xl font-[Neue_Montreal] tracking-tighter">Featured projects</h1></div>
                <div className="px-20"> 
                    <div className="cards w-full flex gap-20 mt-10">
                    <div onHoverStart={()=>handleHover(0)} className="cardcontainer w-1/2   h-[75vh] relative transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl  ">
                      <h1 className=" text-[#cdea68] flex absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  tracking-tighter leading-none text-7xl font-[Neue_Montreal] ">
                      {/* {"FIDE".split("").map((item,index) => (
                        <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay: index*.01}} className="inline-block">{item}</motion.span>
                    ))} */}
                      </h1>
                       <div className="card w-full h-full rounded-xl  overflow-hidden transition-opacity duration-300 hover:opacity-90">
                         <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>                       
                    </div>
                    <div className="cardcontainer w-1/2   h-[75vh] relative transform transition duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-xl">
                    {/* <h1 className="text-[#cdea68] absolute right-full -translate-x-1/2 top-1/2 -translate-y-1/2  tracking-tighter leading-none text-7xl font-[Neue_Montreal] ">
                    {"VISE".split('').map((item,index) => (
                        <span>{item}</span>
                    ))}</h1> */}
                       <div className="card w-full h-full rounded-xl  overflow-hidden transition-opacity duration-300 hover:opacity-90">
                         <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>                       
                    </div>
                </div>
                </div>
               
            
        </div>
    )
}

export default Featured