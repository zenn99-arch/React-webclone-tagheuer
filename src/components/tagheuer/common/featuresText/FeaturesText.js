import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const FeaturesTextSection = ({ thumbnail, title, description, linkText, gradient }) => (
    <div className='flex'>
        <div className='feature-thumbnail flex absolute-center' style={gradient}>
            {thumbnail}
        </div>

        <div className='feature-text'>
            <div className='feature-title'>
                {title}
            </div>
            <div className='feature-description'>
                {description}
            </div>
            {linkText && <div className='feature-link'>
                <a href='#' className='flex'>
                    <MdNavigateNext className='link-arrow' />
                    {linkText}
                </a>
            </div>}

        </div>
    </div>
)

const FeaturesText = ({ data }) => {
    return (
        <div className='ys-content-container flex absolute-center'>
            <div className='ys-content-subheader'>
                {data.subHeader}
            </div>
            <div className='ys-content-header'>
                {data.header}
            </div>
            <div className='ys-content-features flex flex-col'>
                {data.bullets.map((item, key) => (
                    <FeaturesTextSection {...item} key={key} />
                ))}
            </div>
        </div>
    )
}

export default FeaturesText