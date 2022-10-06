import React from 'react'
import { PhotoGallery } from '../../components/samsung'
import { photoGalleryData } from '../../data/samsung'

const Home = () => {
  return (
    <>
      <PhotoGallery data={photoGalleryData}/>
    </>
  )
}

export default Home