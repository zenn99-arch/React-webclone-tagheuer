import React, { useEffect, useRef, useState } from "react";
import './TextImageScroll.css'
import { gsap, Power4 } from "gsap";

const TextImageScroll = ({ data }) => {
  const imgScrollRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const [enableImageScroll, setEnableImageScroll] = useState(false)

  // start buffer
  useEffect(() => {
    setTimeout(() => {
      setEnableImageScroll(true)
    }, 100);
  }, [])

  useEffect(() => {
    const textTrigger = () => {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: textRef.current,
          scrub: true,
          start: "top bottom",
          end: "+=800",
          // onUpdate: (self) => console.log(self.progress),
        },
      });

      tl.fromTo(`.${data.uniqueTag}`,
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
    master.add(textTrigger());
    master.add(imgScrollTrigger());
  }, []);


  useEffect(() => {
    setIndex(Math.floor(((data.scrollImages.length - 1) / 100) * progress * 100));
    setWidth(100 - 25 * progress);
  }, [progress]);


  //preloading images

  useEffect(() => {
    const randomStr = Math.random().toString(32).slice(2) + Date.now();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[randomStr] = [];
    for (const src of data.scrollImages) {
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
    <section className="healthy-section">
      <div className="healthy-wrapper" ref={textRef} style={data.accentColor && { backgroundColor: data.accentColor }}>
        <div className="healthy-heading-wrapper absolute-center flex flex-col">
          <span className="healthy-para absolute-center flex flex-col">
            {data.spanTexts.map((val, i) => <div className={`absolute-center ${data.uniqueTag}`} key={i} style={data.textColor && { color: data.textColor, opacity: 0 }}>{val}</div>)}
          </span>
        </div>
        <div className="healthy-img-wrapper only-mobile" ref={imgScrollRef} >
          <div className="healthy-img " style={{ backgroundColor: data.color }} >
            <img className='img-center healthimg' src={data.mobileImage} alt='watch' />
          </div>
        </div>
        <div className="healthy-img-wrapper non-mobile" ref={imgScrollRef} >
          <div className="healthy-img "  >
            {
              enableImageScroll ?
              <img className='img-center' src={data.scrollImages[index]} alt='watch' />
              :
              <img className='img-center' src={data.staticImage} alt='watch' />
            }
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextImageScroll