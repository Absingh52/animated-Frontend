import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import firstImage from '/Screenshot 2025-03-27 233329.png'
import secondImage from '/Screenshot 2025-03-27 233354.png'
import thirdImage from '/Screenshot 2025-03-27 233406.png'
import fourImage from '/Screenshot 2025-03-27 233432.png'

const Work = () => {
  const workRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-item', {  
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease:"elastic.out(1, 0.5)",
        stagger:0.3,
        delay:0.9,
        
      });
    }, workRef);   

    return () => ctx.revert();   
  }, []);
  return (
    <div ref={workRef} className='flex flex-col justify-center items-center space-y-3 z-[20]  max-w-[1400px] w-full mx-auto p-2'>
      <h2 className=' text-4xl sm:text-7xl work-item tracking-tighter '>Student work</h2>
      <p className='text-center'>Discover some of the fantastic work our students create</p>
      <div className='flex flex-row lg:flex-nowrap flex-wrap space-x-2 space-y-2 items-center justify-center' >
        <img src={firstImage} alt="first" className='rounded-lg w-[400px] sm:w-[350px] work-item' />
        <img src={secondImage} alt="second" className='rounded-lg w-[400px] sm:w-[350px] work-item' />
        <img src={thirdImage} alt="third" className='rounded-lg  w-[400px] sm:w-[350px] work-item' />
        <img src={fourImage} alt="fourth" className='rounded-lg w-[400px] sm:w-[350px] work-item'/>

      </div>
      <button className='text-white  flex justify-between items-center bg-[#2728e5] rounded-4xl p-1 px-4 text-lg sm:text-xl xl:text-2xl font-[500]'>View student work <span className=' pl-3  text-2xl lg:text-4xl'><HiArrowLongRight /></span></button>
    </div>
  )
}

export default Work
