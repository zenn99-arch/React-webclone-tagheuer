import React from 'react'
import './headerBottom.css'
import Button from '../button/Button'
import smallProduct from '../../../../assets/images/tagheuer/unsorted/watches.png'

const HeaderBottom = () => {

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "90px";
  } else {
    document.getElementById("navbar1").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div  className='header-bottom non-tablet-only absolute-center flex'>
      <div className='flex header-bottom-container absolute-center '>
        <div className='header-bottom-left absolute-center flex'>
          <a className='nav-link flex absolute-center' href='#'>
            <img className='header-bottom-image' src={smallProduct} alt="product" />
            <p className='nav-text1'>Tag Heuer Connect e4</p>
          </a>
        </div>
        <div className='header-bottom-right '>
          <Button />
        </div>
      </div>
    </div>
  )
}


export default HeaderBottom