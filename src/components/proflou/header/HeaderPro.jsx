import React, { useState } from "react";
import "./Headerpro.css";

import ProLogo from "../../../assets/images/proflou/logo_full.JPG";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import MaxPdf from "../../../assets/images/downloadables/proflou-max.pdf";
import BrochurePdf from "../../../assets/images/downloadables/ProFlo-Brochure.pdf";

const HeaderPro = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div id="navbar" className="mobile-menu-wrapper  ">
      
      
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""} `}
      >
        <div className="mobile-navbar flex flex-col absolute-center">
          <div className=""><a className="nav-link-mobile  flex flex-col absolute-center" href="https://buy.proflou.com" onClick={toggleMobileMenu}>
            Buy Now
          </a></div>
          <div className=""> <a className="nav-link-mobile  flex flex-col absolute-center" href="#gallery" onClick={toggleMobileMenu}>
            Social Impact
          </a></div>
          <div className=""> <a className="nav-link-mobile  flex flex-col absolute-center" href="#contact" onClick={toggleMobileMenu}>
            Contact
          </a></div>
          <div className=""> <a className="nav-link-mobile  flex flex-col absolute-center" href="#faq" onClick={toggleMobileMenu}>
            FAQs
          </a></div>
        </div>
      </div>

      <div className=" flex header max-width ">
        <a href="#" title="Homepage" className="flex">
          <img src={ProLogo}  className="header-logo" alt="logo" />
        </a>
        <div className=" flex only-mobile">
              
              <a href="https://buy.proflou.com" className=" buyicon flex ">
                <HiOutlineShoppingBag />
              </a>
              
            </div>
        <div className="only-mobile mobile-menu-button-wrapper">
        
          <button
            className={`hamburger hamburger--slider ${showMobMenu ? "is-active" : ""
              }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="non-mobile flex">
          <div className="header-nav-item ">
            {/* <a className="nav-link" href="#">
              Products
            </a> */}
            <a className="nav-link seperator" href="#gallery">
              Social Impact
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <a className="nav-link" href="#faq">
              FAQs
            </a>
            
          </div>
          <div className="header-nav-item dropdown">
            <div className="dropbtn flex">
              Downloadables
              <i className="drop-icon flex ">
                <MdArrowDropDown />
              </i>
              
            </div>
            <div className="dropdown-content">
              <a href={BrochurePdf} download={"proflou-brochure.pdf"}>
                Brochure
              </a>
              <a href={MaxPdf} download={"proflou-max.pdf"}>
                Proflo-U Max Specs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPro;
