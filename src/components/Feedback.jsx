import React from 'react'
import Twitter1 from '/TwitterUser_MarianaOka.webp'
import Twitter2 from '/TwitterUser_CraigHooper.webp'
import Twitter3 from '/TwitterUser_Doreen.webp'  
import Twitter4 from '/TwitterUser_Raini.webp'
import Twitter5 from '/TwitterUser_Kiks.webp'    
import Twitter6 from '/TwitterUser_PaulTruong.webp'
import Twitter7 from '/TwitterUser_Chris.webp'
import Twitter8 from '/TwitterUser_Ray.webp'
import Twitter9 from '/TwitterUser_KristenCabrera.webp'
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className='max-w-[1400px] w-full mx-auto  bg-[#feda00] rounded-4xl my-25 overflow-hidden flex flex-col cursor-pointer  '>
            <div className='text-4xl p-5'>
                <h2>What do our students say?</h2>
            </div>

            <div >

              <div className='flex flex-row animate-scroll space-x-4 items-center pb-8 justify-center'>
                {/* card1 */}
                <div className='flex flex-col space-y-40 bg-white py-3 px-5 min-w-[300px]   rounded-3xl transition-transform duration-300 hover:scale-105'>
                 <div className='space-y-5'>
                 <div className='flex items-center space-x-4'>
                    <img src={Twitter1} alt="" className='rounded-full w-[50px]' />
                    <div className='text-sm'>
                        <h3>Ray</h3>
                        <p>@RAMONDFARVAL0</p>
                    </div>
                 </div>
                 <p className='text-xl'>
                 Want to get better at Shopify theme development? I heard @superhi_ has a great course!
                 </p>
                 </div>

                 
                 <div className='flex items-center space-x-3 '>
                 <FaHeart className='text-[#ff4141]' />
                 <FaComment className='text-[#2728e5]' />
                </div>
                </div>  

                {/* card2 */}
                <div className='flex flex-col  space-y-40 bg-white py-3 px-5 min-w-[300px]  rounded-3xl transition-transform duration-300 hover:scale-105 '>
                    <div className='space-y-5'>
                    <div className="flex items-center space-x-4">
                    <img src={Twitter2} alt="" className='rounded-full w-[50px]' />
                 <div>
                     <h3>Suhail</h3>
                     <p>@SUHAILAMAR</p>
                 </div>
                    </div>
                        <p className='text-2xl'>
                        At @superhi_, I love that there is always someone on the team to give great feedback and share some insight.
                        </p>
                    </div>

                    <div className='flex items-center space-x-3 '>
                 <FaHeart className='text-[#ff4141]' />
                 <FaComment className='text-[#2728e5]' />
                </div>

              </div>


                {/* CARD3 */}

                <div className='flex flex-col space-y-40 bg-white py-3 px-5 min-w-[300px]   rounded-3xl transition-transform duration-300 hover:scale-105 '>
                    <div className='space-y-5'>
                    <div className='flex items-center space-x-4'>
                    <img src={Twitter3} alt="" className='rounded-full w-[50px]' />
                    <div>
                        <h3>Marina</h3>
                        <p>@MARINA</p>
                    </div>
                </div>
                 <p className='text-lg'>
                 Day 1: After years of wanting to learn to code, I’m publicly committing to the 100DaysOfCode Challenge starting today. I begin with @Superhi Foundation, HTML, CSS + Javascript projects.
                 </p>
                    </div>
                 <div className='flex items-center space-x-3 '>
                 <FaHeart className='text-[#ff4141]' />
                 <FaComment className='text-[#2728e5]' />
                 </div>
                 </div>



                 {/* CARD4 */}

                 <div className='flex flex-col space-y-55 bg-white py-3 px-5 min-w-[300px]   rounded-3xl transition-transform duration-300 hover:scale-105 '>
                   <div className='space-y-5'>
                   <div className='flex items-center space-x-4'>
                   <img src={Twitter4} alt="" className='rounded-full w-[50px]' />
                    <div>
                        <h3>Rita</h3>
                        <p>@RITAMARIE</p>   
                    </div>
                   </div>
                    <p className='text-xl'>
                        I’m learning to code with @Superhi and I’m loving it. I’ve already built a website and I’m only on week 2!
                        </p>
                   </div>
                        <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div>
                 </div>

                 {/* card5 */}
                <div className='flex flex-col space-y-49 bg-white py-3 px-5 min-w-[300px]  rounded-3xl transition-transform duration-300 hover:scale-105 '>
                   <div className='space-y-5'>
                   <div className='flex items-center space-x-4'>
                    <img src={Twitter5} alt="" className='rounded-full w-[50px]' />
                    <div>
                        <h3>Kiks</h3>
                        <p>@KIKS</p>
                    </div>
                   </div>
                    <p className='text-xl'>
                        @superhi_ is my go-to community and i got lots of collabs and opportunities from the group, and they remain my clients till today
                    </p>
                   </div>
                   <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div>

                </div>
                
                {/* card6 */}
                <div className='flex flex-col space-y-67 bg-white py-3 px-5 min-w-[300px] rounded-3xl transition-transform duration-300 hover:scale-105 '>
                    <div className='space-y-5'>
                    <div className='flex items-center space-x-4'>
                        <img src={Twitter6} alt="" className='rounded-full w-[50px]' />
                        <div>
                            <h3>Paul</h3>
                            <p>@PAULTRUONG</p>
                        </div>
                    </div>
                    <p className='text-5xl'>
                        SuperHi all the way.
                    </p>
                    </div>

                    <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div>

                </div>

                {/* card7 */}
                    <div className='flex flex-col space-y-35 bg-white py-3 px-5 min-w-[300px]  rounded-3xl transition-transform duration-300 hover:scale-105 '>
                       
                       <div className='space-y-5'>

                       <div className='flex items-center space-x-4'>
                        <img src={Twitter7} alt=""  className='rounded-full w-[50px] '/>
                        <div>
                            <h3>Chris</h3>
                            <p>@CHRSNELSON</p>
                        </div>
                        </div>
                        <p className='text-xl'>
                        I am wrapping up my third JavaScript project from my @superhi_ class, Javascript for Designers, and I am so stoked to understand JavaScript finally. Everything is clicking!
                        </p>
                       </div>

                       <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div>

                    </div>

                    {/* CARD8 */}
                    <div className='flex flex-col space-y-48 bg-white py-3 px-5 min-w-[300px]  rounded-3xl transition-transform duration-300 hover:scale-105'>

                        <div className='space-y-5'>

                            <div className='flex items-center space-x-4'>
                            <img src={Twitter8} alt=""  className='rounded-full w-[50px]'/>
                            <div>
                                <h3>doreen</h3>
                                <p>@OURDOREEN</p>
                            </div>
                        </div>
                            <p className='text-xl'>
                            Finished my @superhi_ JavaScript for Designers course this evening! All going well, that will be another certificate to add to the CV.  
                                                </p>
                        </div>

                        
                       <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div>

                    </div>

                    {/* CARD9 */}
                    <div className='flex flex-col  rounded-3xl space-y-66 bg-white py-3 px-5 min-w-[300px] transition-transform duration-300 hover:scale-105'>
                        <div className='space-y-5'>
                        <div className='flex items-center space-x-4'>
                        <img src={Twitter9} alt="" className='rounded-full w-[50px]' />
                        <div>
                            <h3>Craig</h3>
                            <p>@CRAIGEANHOOPER</p>
                        </div>
                        </div>
                        <p className='text-5xl'>
                        @superhi_ 4 EVER
                        </p> 

                        </div>
                        <div className='flex items-center space-x-3 '>
                            <FaHeart className='text-[#ff4141]' />
                            <FaComment className='text-[#2728e5]' />
                        </div> 
                      </div>
            </div>
         </div>
    </div>
  )
}

export default Feedback
