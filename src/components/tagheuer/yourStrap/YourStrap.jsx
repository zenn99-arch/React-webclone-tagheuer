import React from 'react'
import './yourStrap.css'
import { MdNavigateNext } from 'react-icons/md'
import { BG_BLACK_TG } from '../../../data/customClasses'

const FeaturesTextSection = ({ thumbnail, title, description, linkText, gradient, customClasses, darkMode }) => (
  <div className='flex'>
    <div className={`feature-thumbnail flex absolute-center ${customClasses && customClasses.thumbnail}`}>
      {thumbnail}
      
    </div>

    <div className='feature-text'>
      <div className='feature-title'>
        {title}
      </div>
      <div className={`feature-description ${darkMode ? 'feature-description-dark-mode' : 'feature-description-light-mode'}`}>
        {description}
      </div>
      {linkText && <div className='feature-link'>
        {/* <a href='#' className='flex'>
          <MdNavigateNext className='link-arrow' />
          {linkText}
        </a> */}
      </div>}

    </div>
  </div>
)

const FeatureImageSectionType1 = ({ image, customClasses }) => {
  return (
    <div className='ys-image-container flex absolute-center'>
      <img className={`ys-feature-image ${customClasses && customClasses.featureImage}`} src={image && image[0]} alt="feature products" />
    </div>
  )
}

const FeatureImageSectionType2 = ({ images, customClasses }) => {
  return (
    <div className='tg-performance-grids width-50 flex absolute-center' >
      <div className='tg-performance-grid-left flex flex-col'>
        <img className='tg-performance-grid-image' src={images[0]} />
        <img className='tg-performance-grid-image' src={images[1]} />
      </div>
      <img className='tg-performance-grid-image' src={images[2]} />
    </div>
  )
}

const TextComponent = ({ subHeader, header, bullets, darkMode }) => (
  <div className='ys-content-container flex absolute-center tg-body'>
    <div className='ys-content-subheader'>
      {subHeader}
    </div>
    <div className='ys-content-header'>
      {header}
    </div>
    <div className='ys-content-features flex flex-col'>
      {bullets.map((item, key) => (
        <FeaturesTextSection {...item} key={key} darkMode={darkMode} />
      ))}
    </div>
  </div>
)

const ImageComponent = ({ type, customClasses, ShowcaseImages }) => (
  <>
    {type === 1 && <FeatureImageSectionType1 customClasses={customClasses} image={ShowcaseImages} />}
    {type === 2 && <FeatureImageSectionType2 customClasses={customClasses} images={ShowcaseImages} />}
  </>
)

const YourStrap = ({ featureData, reverse, darkMode }) => {
  return (
    <div id="learnmore" className={`ys-container flex ${darkMode ? 'dark-mode-text' : 'light-mode-text'}  ${featureData.backgroundColor} ${darkMode && BG_BLACK_TG}`}>
      <div className='max-width flex tg-performance-container non-mobile'>
        {reverse ?
          <>
            <ImageComponent {...featureData} />
            <TextComponent {...featureData} darkMode={darkMode} />
          </>
          :
          <>
            <TextComponent {...featureData} darkMode={darkMode} />
            <ImageComponent {...featureData} />
          </>
        }
      </div>


      <div  className='max-width flex tg-performance-container flex-col absolute-center only-mobile'>
        <div  className="div "><ImageComponent {...featureData} /></div>
        <div className="div"><TextComponent {...featureData} darkMode={darkMode} /></div>
      </div>

      
    </div>
  )
}

export default YourStrap