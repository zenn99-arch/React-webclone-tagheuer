import React, { useState } from 'react';
import { FaqText } from '../../../data/proflou';

import './Faq.css'
import { FiPlus, FiMinus } from 'react-icons/fi';



const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    
      <div id="faq" className="Faqsection max-width flex flex-col ">
        <div className="faqheading flex absolute-center">FAQs</div>
        <div className=" flex flex-col">
          {FaqText.map((item, index) => {
            return (
              <div key={index}>
                <div className="Faq flex flex-col" onClick={() => toggle(index)} key={index}>
                  <div>{item.title} <span className='Faq__icon' >{clicked === index ? <FiMinus /> : <FiPlus />}</span></div>
                  
                </div>
                {clicked === index ? (
                  <div className='Faq__content max-width' >
                    <p>{item.description}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        </div>
   
  );
};

export default Faq;