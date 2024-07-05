import React from "react"

const FreeCard = () => {
    return(
        <div className="w-full h-screen px-32 items-center flex gap-5 ">
            <div className="cardcontainer h-[50vh] w-1/2">
              <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex justify-center items-center">
                
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="absolute px-5 py-1 border-2 border-[#cdea68] text-[#cdea68] rounded-xl left-10 bottom-10">&copy;2019-2020</button>
                  
              </div>
            </div>
            <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
              <div className="card w-1/2 rounded-xl h-full  bg-[#1c332f] flex justify-center items-center">
              <div className="card relative w-full rounded-xl h-full bg-[#182a28] flex justify-center items-center">
                
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="absolute px-5 py-1 border-2 border-[#f3f3f2] text-[#f9faf8] rounded-xl left-10 bottom-10 tracking-tighter">&copy;Rating 5.0 on clutch</button>
                  
              </div>
              </div>
              <div className="card w-1/2 rounded-xl h-full bg-[#111b19] flex justify-center items-center">
              <div className="card relative w-full rounded-xl h-full bg-[#182a28] flex justify-center items-center">
                
                    <img className="object-cover mix-blend-" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="absolute px-5 py-1 border-2 border-[#efefee] text-[#f8f9f8] rounded-xl left-10 bottom-10">&copy;2019-2020</button>
                  
              </div>
              </div>
            </div>
        </div>
    )
}

export default FreeCard