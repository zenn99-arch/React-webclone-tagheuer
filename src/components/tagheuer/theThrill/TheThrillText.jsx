import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import './TheThrill.css'

const TheThrillText = () => {

    
    const thrillRef = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: thrillRef.current,
                start: "top bottom",
                end: "+=500",
                scrub: true,
            }
        })

        tl.fromTo('.avant-headline', {
            opacity: 0,
            y: 20
        },
            {
                opacity: 1,
                y: 0,
                ease: Power2.easeIn
            },
            "+=0.5")

        tl.fromTo('.avant-para-ani', {
            opacity: 0,
            y: 100,
            x:0
        },
            {
                opacity: 1,
                y: 0,
                x:0,
                delay: function(i) {
                    return 0.2 * i;
                  },
            },
            "=0.0")

    }, [])
    
  return (
    <div className="thrill-heading-wrapper absolute-center flex flex-col" ref={thrillRef}>
    <span className="thrill-para absolute-center flex flex-col">
      <div className="absolute-center">THE</div>
      <div className="absolute-center">THRILL</div>
      <div className="absolute-center">OF</div>
      <div className="absolute-center">PROGRESS</div>
      
    </span>

</div>
  )
}

export default TheThrillText