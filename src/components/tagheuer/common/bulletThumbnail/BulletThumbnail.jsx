import React from 'react'

const BulletThumbnail = ({ img, icon}) => {
  return (
    <>
        {
            img ? <img className='feature-thumbnail' src={img} /> : {icon}
        }
    </>
  )
}

export default BulletThumbnail