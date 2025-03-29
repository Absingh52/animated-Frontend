import React from 'react'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
const Hero = () => {

  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-item', {  
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: 'elastic.out',
        stagger: 0.3,
        delay: 0.9,
      });
    }, navRef);   

    return () => ctx.revert();   
  }, []);
  return (
    <div ref={navRef} className='flex flex-col items-center px-2 justify-center h-full space-y-4 '>
      <h1 className='xl:text-8xl text-5xl sm:text-6xl tracking-tighter hero-item  text-center '>
         Curate your own <br/> creative career
      </h1>
      <p className='sm:text-xl text-lg xl:text-2xl hero-item  text-center'>Join SuperHi with 50,000+ learners worldwide and gain <br/> technical skills through our practical courses</p>
      <div className="flex justify-between space-x-4 items-center">
        <button className='text-white  flex justify-between items-center bg-[#2728e5] rounded-4xl p-1 px-4  text-sm sm:text-xl xl:text-2xl font-[500]'>See our catalog <span className=' pl-3 text-2xl lg:text-4xl'><HiArrowLongRight /></span> </button>
        <button className='text-white  flex justify-between items-center bg-[#111217] hover:bg-[#989898] cursor-pointer rounded-4xl p-1 px-4  text-sm sm:text-xl xl:text-2xl font-[500] transition-all duration-300'>Try our free course</button>
      </div>
    
    </div>
  )
}

export default Hero
