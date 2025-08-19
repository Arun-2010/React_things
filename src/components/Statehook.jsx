import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Statehook() {

    const[val,setval] = useState(false)
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className=' relative w-60 h-32 bg-zinc-500 rounded flex overflow-hidden'>
        <img  className ={`shrink-0  transition-transform   duration-700    ease-in-out ${val===false ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full   object-cover`} src="https://images.unsplash.com/photo-1752503650851-cbc3f8b00679?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img  className ={`shrink-0   transition-transform   duration-700 ease-in-out   ${val===false ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full  -translate-x-[0%] object-cover`} src="https://images.unsplash.com/photo-1751670346016-bda0dc756da9?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        <span  onClick={()=>setval(()=>!val)
        }
        className='w-8 h-8 flex items-center justify-center bg-[#dadada7b]   rounded-md  absolute bottom-1 left-1/2 -translate-x-[50%]  -translate-y-[10%] '>
             <FaArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  )
}

export default Statehook