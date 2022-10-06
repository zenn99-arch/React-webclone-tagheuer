import React, { useEffect, useRef } from 'react'
import { gsap, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const AvantGrandText = () => {
    const avantRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      }, [])

    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: avantRef.current,
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
            "+=0.7")

        tl.fromTo('.avant-para-ani', {
            opacity: 0,
            y: 100,
            x: 0
        },
            {
                opacity: 1,
                y: 0,
                x: 0,
                delay: function (i) {
                    return 0.3 * i;
                },
            },
            "=0.1")

    }, [])
    return (
        <div className="avant-wrapper avant-section-text tg-body absolute-center flex flex-col" ref={avantRef}>

            <div className="avant-heading-wrapper absolute-center flex flex-col">
                <div className="avant-headline  absolute-center max-width " >
                1st time in the World
                </div>
                <span className="avant-para absolute-center flex flex-col">
                    <div className="avant-para-ani absolute-center">A palm size </div>
                    <div className="avant-para-ani absolute-center">mini analyzer</div>
                    <div className="avant-para-ani absolute-center">to monitor </div>
                    <div className="avant-para-ani absolute-center">Kidney Health  </div>
                </span>
            </div>
        </div>
    )
}

export default AvantGrandText