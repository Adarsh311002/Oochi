import React from "react"

const About = () => {
    return(
        <div className="w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
            <h1 className="text-[4vw] font-[NeueMontreal] tracking-tighter leading-[4.5vw]">
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>

            <div className="w-full pt-10 flex gap-5 border-t-[1.2px] mt-20 border-[#9bae54] ">
                <div className="w-1/2 ">
                <h1 className="text-5xl">Our approach:</h1>
                <button className=" uppercase px-8 py-4 mt-10 text-white bg-zinc-900 rounded-full flex items-center gap-7 ">Read More
                    <div className="w-3 h-3 rounded-full  bg-zinc-100 "></div>
                </button>
                </div>
                <div className="w-1/2 h-[70vh] rounded-3xl bg-[#9bae54] transform transition ease-in-out duration-500 hover:scale-105 hover:rotate-1 hover:shadow-xl hover:skew-y-2  hover:text-white">
                  <img className="w-full h-full bg-cover overflow-hidden rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default About