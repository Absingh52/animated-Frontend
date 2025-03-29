import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowLongRight } from "react-icons/hi2";
import video1 from '/video1.mp4'
import video2 from '/video2.mp4'
import video3 from '/video3.mp4'
const Video = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center space-y-8 tracking-tighter max-w-[1400px] w-full mx-auto p-2'>
            <h2 className='lg:text-7xl md:text-5xl text-3xl text-center'>Don’t know where to start?</h2>
            <div className="flex justify-center sm:flex-nowrap flex-wrap items-center gap-y-4 space-x-4">
                <div className='flex gap-2  items-center justify-center bg-[#91d8ec] rounded-4xl px-4 text-white  py-3 text-2xl'>
                    <span className='w-4 h-4 bg-white rounded-full'></span>Subscribe
                </div>
                <div className='flex gap-2  items-center justify-center bg-white rounded-4xl px-4 text-black  py-3 text-2xl'>
                    <span className='w-4 h-4 bg-[#ff8f3d] rounded-full'></span>Say hi
                </div>
                <div className='flex gap-2  items-center justify-center bg-white rounded-4xl px-4 text-black  py-3 text-2xl'>
                    <span className='w-4 h-4 bg-[#16ab59] rounded-full'></span>Start learning
                </div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-8'>

            <div className="flex lg:flex-row flex-col items-center justify-center bg-[#d5d5d5] rounded-4xl p-4 space-x-4 space-y-2">
                <video src={video1}  autoPlay loop muted className='md:w-[700px] lg:w-[600px]'></video>
                <div className=' space-y-6'>
                     <h2 className='lg:text-5xl text-3xl' >Subscribe to our newsletter</h2>
                    <p className='text-2xl'>Join 120,000120,000+ other creatives and get our newsletter, filled with lots of fresh jobs, design inspiration, cool links, free events, industry updates, and more!</p>
                    <div className='space-x-4'>
                        <input type="email" name='email'  placeholder='Your email address' className='border-none px-6 py-2 bg-white rounded-4xl p-2 w-full max-w-[200px] md:max-w-[400px]' />
                        <button className='bg-[#2728e5] text-white rounded-4xl p-2 px-4 transition-all duration-300 group hover:scale-105 cursor-pointer '>Subscribe</button>
                    </div>
                 </div>
            </div>

        <div className="flex lg:flex-row flex-col items-center justify-center text-white bg-[#00403f] rounded-4xl p-4 space-x-4 space-y-2">
            <video src={video2} autoPlay loop muted className=' md:w-[700px] lg:w-[600px]'></video>
            <div className=' space-y-6'>

            <h2 className='lg:text-5xl text-3xl'>
            Join our online community
            </h2>
            <p className='text-2xl'>It’s a great way to get feedback on your work, meet likeminded creatives, and even find new jobs. Don’t worry, we’re a friendly bunch of folk, and it’s completely free.</p>
            <button className=" bg-black gap-2 flex justify-center items-center text-2xl rounded-4xl p-2 px-4 transition-all duration-300 group hover:scale-105 cursor-pointer ">Count me in <span><HiArrowLongRight/></span></button>

            </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center justify-center bg-[#bebebe] rounded-4xl p-4 space-x-4 space-y-2">
            <video src={video3}  autoPlay loop muted   className='md:w-[700px] lg:w-[600px] '></video>
            <div className=' space-y-4'>
            <h2  className='lg:text-5xl text-3xl'>Take our free code + design course</h2>
            <p className='text-2xl'>Get to know SuperHi’s learning method while creating a beautiful site from scratch. Zero catches, beginner friendly, and the only thing you need is a laptop with internet access.</p>
            <button className=" bg-white gap-2 flex justify-center items-center text-2xl rounded-4xl p-2 px-4 transition-all duration-300 group hover:scale-105 cursor-pointer ">Let's start <span><HiArrowLongRight/></span></button>
            </div>

        </div>
            </div>
      </div>
    </div>
  )
}

export default Video
