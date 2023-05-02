import React from "react";
import "./header.css";
import { headerIcons } from "../../../../data/tg";
import TgLogo from '../../../../assets/images/tagheuer/unsorted/logo.svg'

const HeaderTop = () => {
  

  return (
    <div className="mobile-menu-wrapper">
     

      <div className="max-width flex header ">
        

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
          
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
