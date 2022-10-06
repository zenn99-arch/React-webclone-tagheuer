import React, { useEffect, useRef, useState } from "react";
import "./SleekNew.css";
import { gsap, Power2 } from "gsap";
import { AirPods } from "../../../assets/images/tagheuer/02.duo/is-sequences/large/";
import { mutliColor } from "../../../data/base64Images/mutliColor";

const scrollText = [
  "1. People may lose up to 70 percent of their kidney function before getting any symptoms.",
  "2. Quantitative Measurement of urine albumin is currently difficult at POC/bedside, thus require lab facilities.",
  "3. Current PoC solutions are not sensitive at microalbumin range. Thus reliable detection depends on centralized lab facilities.",
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
      <div className="sleekmobile-img after-laptop">
        <img
          className="sleekimage avantimg"
          src={require("../../../assets/images/proflou/set2/0095.jpg")}
          alt="watch"
        />
        <div className="mobileText flex flex-col absolute-center">
          <div className="sleekmobile-heading">PROBLEM STATEMENT</div>
          {scrollText.map((val => (
            <div className="sleekmobile-para">{val}</div>
          )))}
          
          {/* <div className="sleekmobile-para">2. No single test available in the market that covers large clinically range of urine albumin</div>
          <div className="sleekmobile-para">3. Currently available technology is antibody based that requires reagents to be stored in cold chain</div> */}

        </div>
      </div>

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
          {enableImageScroll ?
            <img
              className="img-center "
              src={images[index]}
              alt="watch"
            />
            :
            <img
              className="img-center "
              src={mutliColor}
              alt="watch"
            />}
        </div>
      </div>
    </section>
  );
};

export default SleekNew;
