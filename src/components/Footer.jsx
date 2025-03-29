import React from 'react'
// import '.App.css'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='backimage py-25   '>
      <div className="max-w-[1400px] footer-container flex flex-col  p-4 space-y-8 w-full mx-auto rounded-4xl bg-[#ffffffda] backdrop-blur-md ">
        <ul className='flex flex-col md:flex-row px-4  py-4 justify-start items-center space-x-25'>
            <li className='space-y-5'>
                <h3 className='text-2xl cursor-pointer'>Learn</h3>

                <div>
                    <ul className='flex flex-col text-md space-y-2'>
                        <li className='footer-elements'>All courses</li>
                        <li className='footer-elements'>Code</li>
                        <li className='footer-elements'>Design</li>
                        <li className='footer-elements'>Project management</li>
                        <li className='footer-elements'>SuperHi Editor</li>
                    </ul>
                </div>
            </li>
            <li className='space-y-5 my-3'>
                <h3 className='text-2xl'>Company</h3>

                <div>
                    <ul className='flex flex-col text-md space-y-2'>
                        <li className='footer-elements'>About</li>
                        <li className='footer-elements'>Student work</li>
                        <li className='footer-elements'>SuperHi for Business </li>
                        <li className='footer-elements'>Careers</li>
                        <li className='footer-elements'>Newsletter</li>
                    </ul>
                </div>
            </li>
            <li className='space-y-5 mr-32'>
                <h3 className='text-2xl'>Support</h3>
                    
                    <div>
                        <ul className='flex flex-col text-md space-y-2'>
                            <li className='footer-elements'>Help center</li>
                            <li className='footer-elements'>Contact us</li>
                            <li className='footer-elements'>Terms of service</li>
                            <li className='footer-elements'>Privacy policy</li>
                            <li className='footer-elements'>Refund policy</li>
                        </ul>
                    </div>
            </li>
        </ul>
        <div className="px-8  flex justify-between items-center">
        <p className="text-sm hidden sm:block">
        © {new Date().getFullYear()}  All rights reserved.
        </p>
        <div className='flex space-x-4 text-[#2728e5]'>
            <FaTwitter className='text-xl hover:text-black cursor-pointer ' />
            <FaFacebook className='text-xl hover:text-black cursor-pointer ' />
            <FaInstagram className='text-xl hover:text-black cursor-pointer ' />
            <FaYoutube className='text-xl hover:text-black cursor-pointer ' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
