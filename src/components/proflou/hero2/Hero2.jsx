import gsap from "gsap";

import React from "react";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import heroFloatLeftImg from "../../../assets/images/proflou/device hero.png";

import bging from "../../../assets/images/proflou/hero1.png";
import fullbging from "../../../assets/images/proflou/hero-full.jpg";

import "./Hero2.css";

const Hero2 = () => {
  const heroRef = useRef(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])


  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=700",
        scrub: true,
        
      }
    })
    tl.to('.hero-floating-imgs',
    {
      x: 0,
      y: 400,
    }, "+=0.0")
  }, [])

  return (
    <>
      <section className="hero-section tg-body" ref={heroRef}>
        <div className="after-laptop">
          <div className="hero-wrapper flex flex-col under absolute-center">
            <img className="bg-img " src={fullbging} alt="" />
          </div>
        </div>

        <div className="hero-floating-imgs flex only-laptop">
          {/* <img
            className="hero-floating-img float-1"
            src={heroFloatLeftImg}
            alt=""
          /> */}
        </div>
        <div className="hero-wrapper flex flex-col under absolute-center only-laptop">
          <img className="bg-img " src={fullbging} alt="" />
        </div>

        <div className="hero-heading-wrapper hero-image flex-start flex flex-col">
          <div className="hero-headline1 flex-start flex-col ys-content-subheader flex ">
          Mini Analyzer for Kidney Health
          </div>
          <div className="hero-heading1 flex">
            Proflo-U<span id="hero-trademark">®</span>
          </div>

          <div className="hero-button flex-start flex flex-col">
            <a href="#learnmore" className="button non-mobile">
              <span>Learn More</span>
            </a>
            <a href="https://buy.proflou.com" className="button only-mobile">
              <span>Buy Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
