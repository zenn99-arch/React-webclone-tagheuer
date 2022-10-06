import React, { useEffect, useRef, useState } from "react";
import "./TheThrill.css";
import { gsap } from "gsap";

const TheThrill = ({ images }) => {
  const imgScrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(100);

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

    const master = gsap.timeline();
    master.add(imgScrollTrigger());
  }, []);

  useEffect(() => {
    setIndex(Math.floor(((images.length - 1) / 100) * progress * 100));

    setWidth(100 - 25 * progress);
    console.log(width);
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
    <section className="thrill-section">
      <div className="thrill-wrapper ">
        <div className="thrill-img-wrapper  " ref={imgScrollRef}>
          <div className="thrill-img ">
            <img className="img-center" src={images[index]} alt="watch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheThrill;
