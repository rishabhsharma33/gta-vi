import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group", {
      duration: 2,
      scale: 10,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function() {
        if (this.progress() >= 0.95) {
          setShowContent(true)
          setTimeout(() => {
            document.querySelector(".svg").remove()
          }, 100)
          this.kill()
        }
      }
    })
  })

  useGSAP(() => {

    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 1.3,
      ease: "Power4.easeInOut",
    })
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.3,
      duration: 1.3,
      ease: "Power4.easeInOut",
    })
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.2,
      duration: 1.3,
      ease: "Power4.easeInOut",
    })
    gsap.to(".character", {
      scale: 1.2,
      duration: 1.3,
      ease: "Power4.easeInOut",
    })
    gsap.to(".text", {
      rotate: 0,
      scale: 1,
      duration: 1.3,
      ease: "Power4.easeInOut",
    })

    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function(e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      })
      gsap.to(".sky", {
        x: xMove,
      })
      gsap.to(".bg", {
        x: xMove * 1.7,
      })
    })
  }, [showContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar w-full px-10 py-10 absolute top-0 left-0 z-[10]'>
              <div className='logo flex items-center gap-6'>
                <div className='lines flex flex-col gap-1'>
                  <div className='line w-10 h-1 bg-white'></div>
                  <div className='line w-7 h-1 bg-white'></div>
                  <div className='line w-4 h-1 bg-white'></div>
                </div>
                  <h3 className='text-3xl -mt-[6.7px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>
            <div className='imagesdiv relative overflow-hidden w-full h-screen'>
              <img src="./sky.png" alt="backgorund image" className='absolute scale-[1.6] rotate-[-20deg] sky top-0 left-0 w-full h-full object-cover' />
              <img src="./bg.png" alt="backgorund image" className='absolute bg scale-[1.7] rotate-[-15deg] top-0 left-0 w-full h-full object-cover' />
              <div className="text text-white absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-1 scale-[1.5] rotate-[-10deg]">
                <h1 className='text-8xl font-bold -ml-24'>grand</h1>
                <h1 className='text-8xl font-bold ml-11'>theft</h1>
                <h1 className='text-8xl font-bold -ml-17'>auto</h1>
              </div>
              <img src="./girlbg.png" alt="girl image" className='absolute character bottom-[-25%] scale-[1.8] left-1/2 -translate-x-1/2 w-[33%] object-cover' />
            </div>
            <div className='btmbar text-white w-full px-10 py-16 absolute bottom-0 left-0 z-[10] bg-gradient-to-t from-black to-transparent'>
              <div className='flex items-center gap-2 absolute top-1/2'>
                <i className="ri-arrow-down-line"></i>
                <h3 className='text-xl font-[Helvetica]'>Scroll Down</h3>
              </div>
              <img src='./ps5.png' alt='ps5' className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] object-cover'/>
            </div>
          </div>
          <div className='py-22 w-full h-screen flex items-center justify-center bg-black'>
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className='limg relative w-1/2 h-full'>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] object-cover' src="./imag.png" alt=''/>
              </div>
              <div className="rg w-[38%]">
                <h2 className='text-6xl'>Old streets.</h2>
                <h2 className='text-6xl'>New rules.</h2>
                <p className='mt-6 text-sm font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis doloribus consequatur.</p>
                <p className='mt-2 text-sm font-[Helvetica]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quo laborum doloremque aliquid nemo ad ullam ipsam consectetur soluta! Adipisci, pariatur beatae. Sit.</p>
                <p className='mt-6 text-sm font-[Helvetica]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero doloremque sit repellendus eius esse officiis vel voluptatem. Suscipit eum, ipsum magni repellat provident deserunt id voluptates. Totam omnis molestiae excepturi assumenda!</p>
                <button className='bg-yellow-500 px-8 py-5 text-black text-[1.5rem] mt-6'>Download Now</button>
              </div>
            </div>
          </div>
        </div>)}
    </>
  )
}

export default App