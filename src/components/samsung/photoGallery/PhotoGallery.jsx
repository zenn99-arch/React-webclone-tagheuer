import React from 'react'
import './photoGallery.css'

const PhotoGallery = ({ data }) => {
  return (
    <div className='tg-body sg-photo-gallery'>
      <div className='sg-photo-gallery-container max-width'>
        <div className='sg-photo-gallery-top-text'>
          <div className='sg-photo-gallery-subheading'>{data.subheading}</div>
          <div className='sg-photo-gallery-heading'>{data.heading}</div>
        </div>
        <div className='sg-photo-gallery-images-grid flex'>
          <div className='sg-photo-gallery-grid-image sec1' style={{ backgroundImage: `url(${data.gridImages[0]})` }} />
          <div className='sg-photo-gallery-grid-image sec2 flex flex-col'>
            <div className='sg-photo-gallery-grid-image-v image1' style={{ backgroundImage: `url(${data.gridImages[1]})` }} />
            <div className='sg-photo-gallery-grid-image-v image2' style={{ backgroundImage: `url(${data.gridImages[2]})` }} />
          </div>
          <div className='sg-photo-gallery-grid-image sec3 flex flex-col'>
            <div className='sg-photo-gallery-grid-image-v image3' style={{ backgroundImage: `url(${data.gridImages[3]})` }} />
            <div className='sg-photo-gallery-grid-image-v image4' style={{ backgroundImage: `url(${data.gridImages[4]})` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
