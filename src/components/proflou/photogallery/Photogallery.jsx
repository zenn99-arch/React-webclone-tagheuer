import React from 'react'
import './Photogallery.css'

import Img1 from '../../../assets/images/proflou/img1.jpg'
import Img2 from '../../../assets/images/proflou/img2.jpg'
import Img3 from '../../../assets/images/proflou/img3.jpg'
import Img4 from '../../../assets/images/proflou/img4.jpg'
import Img5 from '../../../assets/images/proflou/img5.jpg'
import Img6 from '../../../assets/images/proflou/img6.jpg'

const Photogallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    }

  ]

  

  return (
    <>
    <div id='gallery' className='galleryheading absolute-center flex flex-col  ' >
      <div className='absolute-center flex flex-col'>Social Impact</div>
    </div>
    <div className='gallery' >
      {data.map((item, index)=>{
        return (
            <div className='pics' key={index} >
              <img src={item.imgSrc} style={{width: '100%'}} alt='' />
            </div>
        )
      })}
    </div>
   
    </>
  )
}

export default Photogallery