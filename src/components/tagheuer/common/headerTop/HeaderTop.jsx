import React from "react";
import "./header.css";
import { headerIcons } from "../../../../data/tg";
import TgLogo from '../../../../assets/images/tagheuer/unsorted/logo.svg'

const HeaderTop = () => {
  const LeftNavItems = () => (
    <div className="right-nav-items flex tg-body">
      {headerIcons.map((item, index) => (
        <div key={index} className="right-nav-item">
          <a href="#" title={item.title}>
            {item.icon()}
          </a>
        </div>
      ))}
    </div >
  )

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile`}
      ></div>

      <div className="max-width flex header ">
        <div className="only-tablet mobile-menu-button-wrapper">
          <button
            className={` hamburger hamburger--slider`}
            type="button"
            onClick={() => { }}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className="flex absolute-center">
          <a href="#" title="Homepage">
            <img
              src={TgLogo}
              className="header-logo"
              alt="logo"
            />
          </a>
          <div className="flex left-nav-items non-tablet-only">
            <a className="nav-link" href="#">Timepieces</a>
            <a className="nav-link seperator" href="#">Smartwatches</a>
            <a className="nav-link" href="#">The Gray Man</a>
            <a className="nav-link" href="#">Tag Heuer Universe</a>
          </div>
        </div>

        <div>
          <LeftNavItems />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
