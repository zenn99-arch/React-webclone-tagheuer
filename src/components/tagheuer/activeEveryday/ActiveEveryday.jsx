import React, { useEffect, useRef, useState } from "react";
import './ActiveEveryday.css';
import { gsap } from "gsap";

const ActiveEveryday = ({ images }) => {

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

  return (
    <section className="active-section">
    <div className="active-wrapper">
      <div className="active-heading-wrapper absolute-center flex flex-col">
        <span className="active-para absolute-center flex flex-col">
          <div className="absolute-center">ACTIVE</div>
          <div className="absolute-center">EVERY</div>
          <div className="absolute-center">DAY</div>
        </span>
    </div>
        <div className="active-img-wrapper" ref={imgScrollRef} >
        <div className="active-img ">
            <img className='img-center' src={images[index]} alt='watch' />
        </div>
      </div >
      </div>
  </section>
  )
}

export default ActiveEveryday