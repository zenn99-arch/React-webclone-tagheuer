import React, { useState } from "react";
import "./MobileScroll.css";
import ScreenText from "./ScreenText";
import img1 from "../../../assets/images/proflou/splash.png";
import img2 from "../../../assets/images/proflou/get started.png";
import img3 from "../../../assets/images/proflou/read.png";
import img4 from "../../../assets/images/proflou/ca.png";

export const scrollData = [
  {
    heading: "We’ve got your back.",
    description:
      "use our app to get micro albumin result in real-time.",
    mobile_img:img1,
  },
  {
    heading: "Result that you can trust.",
    description:
      "our app provide high accurate result to keep you updated with your kidney health.",
    mobile_img:img2,
  },
  {
    heading: "Clinically Accurate and Sensitive",
    description:
      "get high accurate result in just touch of a button",
    mobile_img:img3,
  },
  {
    heading: "Help you understand the result",
    description:
      "The microalbuminuria test is a simple urine test. You can eat and drink normally before the test. No special preparation is necessary for this test.",
    mobile_img:img4,
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div key={i} className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;