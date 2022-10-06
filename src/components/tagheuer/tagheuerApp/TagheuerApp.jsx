import React from 'react'
import './tagheuerApp.css'

const TagheuerApp = ({ data }) => {
  
  return (
    <div className='tg-app-container flex flex-col tg-body'>
      <div className='flex flex-col absolute-center max-width tg-app-inner-container'>
        <img className='logo' src={data.icon} />
        <div className='content-subheader tg-app-subheader'>
          {data.subHeader}
        </div>
        <div className='content-header tg-app-header'>
        {data.header}
        </div>
        <div className='tg-app-store-icons flex'>
         <a target="_blank_" href = "https://play.google.com/store/apps/details?id=com.prantae.proflou" > <img className='tg-app-store-icon' src={data.googlePlayIcon} />  </a>
          {/* <img className='tg-app-store-icon' src={data.appStoreIcon} /> */}
        </div>
        <div className='tg-app-description'>
          {data.description}
        </div>
      </div>
    </div>
  )
}

export default TagheuerApp