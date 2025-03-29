import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const Popular = () => {
  return (
    <div className='max-w-[1400px] w-full mx-auto p-5 bg-[#fecfd5] space-y-7 my-15 rounded-3xl tracking-tighter'>
      <p className='text-4xl font-[500]'>Most popular</p>
      < div className='flex  lg:flex-nowrap flex-wrap justify-center items-center space-x-6 space-y-5'>
        <div className='flex flex-col   bg-[#e1ecfe] gap-[10rem] xl:gap-[14em] p-9 w-full max-w-[450px] min-h-[400px] lg:min-h-[600px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-xl cursor-pointer'>
           <div className="space-y-4">
           <h2 className=' text-4xl sm:text-3xl lg:text-4xl xl:text-6xl font-[500]'>Design + <br/>code your <br/> first website</h2>
           <p className=' lg:text-2xl text-xl  font-[500]'>Try our free course: Plan, Design +  Code Your First Website. Get from idea  to up-and-running, plus learn how to work with clients, project plans, wireframes, hosting, and more.</p>
           </div>
            <button className='text-black bg-white flex w-full max-w-[280px]  items-center  rounded-4xl p-1 px-4 text-2xl font-[500]'>Your first website <span className=' pl-3 text-4xl'><HiArrowLongRight /></span></button>
        </div>
        <div className='flex flex-col bg-[#16ab59] gap-[10rem] xl:gap-[13em] p-9 w-full max-w-[450px] min-h-[400px] lg:min-h-[600px] rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'>
           <div className="space-y-4 text-white"> 
            <h2  className='text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-[500]'>Learn to code from scratch</h2>
           <p className='lg:text-2xl text-xl font-[500]'>Everything you need to know to create websites from scratch. By the end, you'll be comfortable in making your own websites with the best Javascript libraries, animation, and responsive design.</p></div>
            <button className='text-black bg-white flex w-full max-w-[240px]  items-center  rounded-4xl p-1 px-4 text-2xl font-[500]'>Learn to code <span className=' pl-3 text-4xl'><HiArrowLongRight /></span></button>
        </div>
        <div className='flex flex-col bg-[#ff7714] gap-[10rem] xl:gap-[13em] p-9 w-full max-w-[450px] min-h-[400px] lg:min-h-[600px] rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'>
            <div className="space-y-4">
            <h2 className='text-4xl sm:text-3xl lg:text-4xl xl:text-6xl font-[500]'>Become a digital designer</h2>
            <p className='lg:text-2xl text-xl font-[500]'>Learn responsive web design, from layouts and visual hierarchy to branding, color, type, and so much more. This is our fundamental design course, Visual Design + Branding.</p>
            </div>
            <button className='text-black bg-white flex w-full max-w-[240px]  items-center  rounded-4xl p-1 px-4 text-2xl font-[500]'>Digital design <span className=' pl-3 text-4xl'><HiArrowLongRight /></span></button>
        </div>
      </div>
     
    </div>
    
  )
}

export default Popular
