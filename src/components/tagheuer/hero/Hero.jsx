import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useEffect, useRef } from "react";
import bgLeft from "../../../assets/images/tagheuer/unsorted/bg-left.png";
import bgRight from "../../../assets/images/tagheuer/unsorted/bg-right.png";
import heroFloatLeftImg from "../../../assets/images/tagheuer/unsorted/hero-float-left.png";
import heroFloatRightImg from "../../../assets/images/tagheuer/unsorted/hero-float-right.png";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=900",
        scrub: true,
        onUpdate: self => console.log(self.progress),
      }
    })
    tl.to('.hero-floating-imgs',
    {
      x: 0,
      y: -140
    }, "+=0.0")
  }, [])
  
  return (
    <>
      <section className="hero-section tg-body" ref={heroRef}>
        <div className="hero-wrapper flex flex-col absolute-center">
          <div className="hero-floating-imgs flex">
            <img className="hero-floating-img float-1" src={heroFloatLeftImg} />
            <img className="hero-floating-img float-2" src={heroFloatRightImg} />
          </div>
          <div className="hero-bg-imgs flex">
            
            <img className="hero-bg-img" src={bgLeft} />
            <img className="hero-bg-img" src={bgRight} />
          </div>

          <div className="hero-heading-wrapper">
            <div className="hero-headline ys-content-subheader flex flex-col absolute-center">
              TAG HEURE
            </div>
            <div className="hero-heading">
              CONNECTED
            </div>
            <div className="hero-heading">
              CALIBRE E4
            </div>
          </div>
          <div className="hero-button flex">
            <div className="header-button absolute-center max-width flex-row ">
              <button className="btn flex ">
                <div class="triangle-right space-between max-width  "></div>
                <div className="line space-between max-width  "></div>
                <div className="btn-text space-between max-width  ">
                  PLAY THE VIDEO
                </div>
              </button>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Hero;
