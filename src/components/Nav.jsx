import React, { useEffect, useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { gsap } from 'gsap';
import { IoReorderThree } from "react-icons/io5";

const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {  
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.3,
        
      });
    }, navRef);   

    return () => ctx.revert();   
  }, []);

  return (
    <div ref={navRef}      className='rounded-4xl z-20 backdrop-blur-sm  bg-[#fcfcfcf1] shadow-xl max-w-[1400px] w-full mx-auto p-2  my-4 fixed top-0 left-0 right-0'>
      <ul className='flex items-center justify-between text-[1.4em] px-3'>
        <li className='flex gap-5 items-center'>
          <div className='nav-item hover:text-[#2728e5] cursor-pointer'>Catalog</div>
          <div className='nav-item md:flex hidden hover:text-[#2728e5] cursor-pointer'>About</div>
        </li>
        <li className='flex gap-5 items-center '>
          <div>
            <IoIosSearch className='nav-item text-[1.4em] md:flex hidden hover:text-[#2728e5] cursor-pointer ' />
          </div>
          <IoReorderThree className=' md:hidden flex text-3xl  text-[#2728e5]' />
          <div className='nav-item md:flex hidden hover:text-[#2728e5] cursor-pointer'>Cart</div>
          <div className='nav-item md:flex hidden hover:text-[#2728e5] cursor-pointer'>Sign in</div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
