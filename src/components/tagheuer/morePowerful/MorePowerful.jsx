import React, { useEffect, useRef, useState } from "react";
import './MorePowerful.css'
import { gsap, Power4 } from "gsap";
import { GRADIENT_RED_PF_DEVICE } from "../../../data/customClasses";

const MorePowerful = ({ data, images }) => {

  const imgScrollRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const textTrigger = () => {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: textRef.current,
          scrub: true,
          start: "top bottom",
          end: "+=1000",
          // onUpdate: (self) => console.log(self.progress),
        },
      });

      tl.fromTo('.more-powerful-ani',
        {
          opacity: 0,
          scale: 2,
        },
        {
          opacity: 1,
          scale: 1,
          ease: Power4.easeInOut,
          delay: function (i) {
            return 0.3 * i;
          },
        },
        "=0.0")

      return tl;
    };

    const imgScrollTrigger = () => {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: imgScrollRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=900",
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      return tl;
    };

    const master = gsap.timeline();
    master.add(imgScrollTrigger());
    master.add(textTrigger());
  }, []);

  useEffect(() => {
    setIndex(Math.floor(((images.length - 1) / 100) * progress * 100));
    setWidth(100 - 25 * progress);
  }, [progress]);


//preloading images

useEffect(() => {
  const randomStr = Math.random().toString(32).slice(2) + Date.now();
  window.usePreloadImagesData = window.usePreloadImagesData ?? {};
  window.usePreloadImagesData[randomStr] = [];
  for (const src of images) {
    // preload the image
    const img = new Image();
    img.src = src;
    // keep a reference to the image
    window.usePreloadImagesData[randomStr].push(img); 
  }
  return () => {
    delete window.usePreloadImagesData?.[randomStr];
  };
}, []);


  return (
    <section className="powerful-section">
      <div className={`powerful-wrapper `} ref={textRef}>
        <div className="powerful-heading-wrapper absolute-center flex flex-col">
          <span className="powerful-para absolute-center flex flex-col">
            <div className="absolute-center more-powerful-ani">RESULTS</div>
            <div className="absolute-center more-powerful-ani">IN</div>
            <div className="absolute-center more-powerful-ani">JUST</div>
            <div className="absolute-center more-powerful-ani">1 MINUTES</div>
          </span>
        </div>
        <div className="powerful-img-wrapper" ref={imgScrollRef}>
          <div className="powerful-img ">
            <img className='img-center' src={images[index]} alt='watch' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MorePowerful