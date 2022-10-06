import React, { useState, useRef, useEffect } from "react";
import prev from "../../../assets/images/proflou/testimonials/arrow-left.svg";
import next from "../../../assets/images/proflou/testimonials/arrow-right.svg";
import image_john from "../../../assets/images/proflou/testimonials/image.png";
import image_tanya from "../../../assets/images/proflou/testimonials/image2.png";

import './Testimonial.css'

const testimonials=[
  {
    img: image_tanya,
    quote: "“ Kidney check up takes a lot of time, this device does that so quickly. Nice medical Innovation. ”",
    name:"Mrs. J. Kabi",
    occupation:"(Resident, Shree Krishna Anand Old Age Home)"
  },
  {
    img: image_john,
    quote: "“ I have seen a long queue infront of doctor's office for kidney health check up, This device provides kidney check up at doorstep.”",
    name:"Shree Rajesh Mahapatra",
    occupation:"(Manager, Shree Krishna Anand Old Age Home)"
  }
];

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const displayedTestimonial = testimonials[currentTestimonial];
  const altText= `${displayedTestimonial.name}'s image`;
  return (
    <div className="App testimonialwrapper">
      <main className="container">
        <div className="container__text">
          <blockquote key={"b"+currentTestimonial}>{displayedTestimonial.quote}</blockquote>
          <cite key={"c"+currentTestimonial}>
            <span>{displayedTestimonial.name}</span>
            <span>{displayedTestimonial.occupation}</span>
          </cite>
        </div>
        <div className="container__img">
              <img key={"i"+currentTestimonial} className="testimonial__img" src={displayedTestimonial.img} alt={altText}></img>
          <div className='buttonSet'>
              <button className="prev" onClick={()=>onClick('prev')} title="previous"><img src={prev} alt="previous button"></img></button>
              <button className="next" onClick={()=>onClick('next')} title="next"><img src={next} alt="next button"></img></button>
          </div>
        </div>
      </main>
    </div>
  );
  function onClick(action){
    if (action==='prev'){
      currentTestimonial===0? setCurrentTestimonial(testimonials.length-1): setCurrentTestimonial(prev=>prev-1);
    }else if (action==='next'){
      currentTestimonial===testimonials.length-1? setCurrentTestimonial(0): setCurrentTestimonial(prev=>prev+1);
    }else{
      console.error('Wrong/missing action');
    }
  }
}

export default Testimonial;