import React, { useEffect, useRef, useState } from 'react'
import './AvantGrand.css'
import { gsap } from 'gsap'


const AvantGrand = ({images}) => {
  const imgScrollRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(100)

  useEffect(() => {
    const imgScrollTrigger = () => {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: imgScrollRef.current,
          start: "top 95%",
          end: "+=900",
          onUpdate: self => setProgress(self.progress),
        }
      });
      return tl
    }
    const master = gsap.timeline()
    master.add(imgScrollTrigger())
  }, [])

  useEffect(() => {
    setIndex(Math.floor(((images.length - 1) / 100 * progress) * 100))
    setWidth(100 - (25 * progress))
  }, [progress])

  // Preload images
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
  }, [])

  return (
    <section className="avant-section flex absolute-center" ref={imgScrollRef} >

      <div className='avant-section-inner flex flex-col non-mobile' style={{ maxWidth: `${width}%` }}>
        <div className="avant-img"  >
          <img className='img-center' src={images[index]} alt='watch' />
        </div>
      </div>
    </section>
  )
}

export default AvantGrand