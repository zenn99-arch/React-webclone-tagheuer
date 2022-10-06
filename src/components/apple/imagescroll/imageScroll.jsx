import React, { useEffect, useRef, useState } from 'react'
import "./imageScroll.css"
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { AirPods } from '../../../assets/images/tagheuer/01.crown/is-sequences/large/'

const ScrubGrand = ({ data, images }) => {
  const imgScrollRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  useEffect(() => {
   

    const imgScrollTrigger = () => {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: imgScrollRef.current,
          
          
          start: "top bottom",
          end: "+=1400",
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
    <section className="Scrub-section flex absolute-center" ref={imgScrollRef} >

      <div className="Scrub-img only-mobile"  >
        <img className='img-center Scrubimg' src={require('../../../assets/images/proflou/water device.jpg')} alt='watch' />
      </div>

      <div className='Scrub-section-inner flex flex-col non-mobile' style={{ maxWidth: `${width}%` }}>
        <div className="Scrub-img"  >
          <img className='img-center' src={images[index]} alt='watch' />
        </div>
      </div>
    </section>
  )
}

export default ScrubGrand