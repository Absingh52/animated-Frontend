import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Popular from './components/Popular'
import Video from './components/Video'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
function App() {
  

  return (
   

        <div  className=' svg relative text-black  bg-[#eff6ff]'>

        <svg width="350px" className='absolute lg:flex hidden bottom-[-11rem] left-20 z-[1] ' height="350px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0Z" fill="#ff4141"/>
        </svg>

        <svg width="350px" className='absolute lg:flex hidden top-[-16rem] right-[-2rem] z-[1] ' height="350px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0Z" fill="#91d8ec"/>
        </svg>

        <svg width="350px" height="350px" className=' lg:flex hidden  absolute top-40 left-[-5rem] rotate-90  z-[1] ' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z" fill="#16ab59"/>
        </svg>

        <svg  width="300px" height="300px" className=' lg:flex hidden top-50 right-[-13rem] rotate-35 absolute z-[1]' viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M1 1h48v48h-48z" fill='#ffbac4'/></svg>

        <svg fill='#ade4f8' width="350px" height="350px" className='lg:flex hidden  absolute bottom-[-11rem] right-0 z-[1]' viewBox="0 0 15 15" version="1.1" id="star" xmlns="http://www.w3.org/2000/svg">
        <path id="path4749-2-8-2" d="M7.5,0l-2,5h-5l4,3.5l-2,6l5-3.5&#xA;&#x9;l5,3.5l-2-6l4-3.5h-5L7.5,0z"/>
          </svg>

          <svg width="500px" className= ' lg:flex hidden absolute top-[-13rem]  left-15  z-[1]  rotate-15' height="500px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M100 20 L160 80 L140 160 L60 160 L40 80 Z" 
            fill="#FDE047" 
            stroke="none" />
          </svg>

          <div class="relative w-[100vw] h-[100vh] z-10" >
          <Nav/>
           <Hero/>
            <Work/>
            <Popular/>
            <Video/>
            <Feedback/>
            <Footer/>
          </div>


        </div>
  
  )
}

export default App  