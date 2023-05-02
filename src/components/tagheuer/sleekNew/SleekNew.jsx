import React, { useEffect, useRef, useState } from "react";
import "./SleekNew.css";
import { gsap, Power2 } from "gsap";
import { AirPods } from "../../../assets/images/tagheuer/02.duo/is-sequences/large/";

const scrollText = [
  "A LARGER CROWN AND REDESIGNED PUSH BUTTONS PROVIDE AN ENHANCED ERGONOMY",
  "THINNER 42MM BEZEL FOR MORE ELEGANT STYLES OR 45MM FOR A RUGGED SPORTY LOOK",
  "SAPPHIRE ULTRA-RESISTANT GLASS COMBINED WITH A HIGH-DEFINITION SCREEN FOR UNMATCHED READABILITY",
];

const SleekNew = ({ images }) => {
  const imgScrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);

  const [textProgress, setTextProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const avantRef = useRef(null);
  const [enableImageScroll, setEnableImageScroll] = useState(false)

  // start buffer
  useEffect(() => {
    setTimeout(() => {
      setEnableImageScroll(true)
    }, 100);
  }, [])

  useEffect(() => {
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

    const textScrollTrigger = () => {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: avantRef.current,
          start: "top center",
          end: "+=900",
          scrub: true,
          pin: true,
          onUpdate: (self) => setTextProgress(self.progress),
        },
      });

      return tl;
    };

    const master = gsap.timeline();
    master.add(imgScrollTrigger());
    master.add(textScrollTrigger());
  }, []);

  useEffect(() => {
    setIndex(Math.floor(((AirPods.length - 1) / 100) * progress * 100));
    setWidth(75 + 100 * progress);
  }, [progress]);

  useEffect(() => {
    setTextIndex(Math.floor((scrollText.length / 100) * progress * 100));
  }, [textProgress]);

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
    <section className="sleek-section flex  ">
      

      <div className="sleek-wrapper absolute-center  flex only-laptop  ">
        <div className="sleek-headline-wrapper under flex flex-col  ">
          <div ref={avantRef}>
            <div className="sleek-headline flex-start max-width">
              <h1>PROBLEM STATEMENT</h1>
            </div>

            <div className="sleek-para-wrapper1 wrapper-scroll-ani">
              <span className="sleek-para flex-start flex flex-col">
                <div className="flex-start">{scrollText[textIndex]}</div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="sleek-img-wrapper only-laptop absolute-center flex-row ">
        <div  className="sleek-img " ref={imgScrollRef}>
         
            <img
              className="img-center "
              src={images[index]}
              alt="watch"
            />
            
        </div>
      </div>
    </section>
  );
};

export default SleekNew;
