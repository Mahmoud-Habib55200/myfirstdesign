import React from 'react';
import Header from '../header/Header';
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import  Heart from "../assets/heart.png";
import  Calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = {type : 'spring' , duration : 3}
  return (

    <div className="hero">
<div className="blur hero-blur">

</div>
{/* start section left */}
<div className='left-h' > 
<Header/>
{/* start the best ad */}
<div className="the-best-ad"> 
<motion.div
initial={{left : '238px'}}
whileInView={{left : '8px'}}
transition={{...transition , type : 'tween'}}
>
</motion.div>
<span>
THE BEST FITNESS CLUB IN THE TOWN</span>
</div>
 

{/* end the best */}






{/* start heading */}

<div className="hero-text">
  <div>
  <span className='stroke-text'>SHAPE  </span>
  <span>YOUR</span>
  </div>
  <div><span>IDEAL BODY</span></div>
  <div  >
    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
 </div>
</div>
{/* end heading */}
 


{/* start figuers */}
<div className='figuers'>
<div>
<span> 
  <NumberCounter end = {140} start ={100} delay = "4" preFix= "+"/>
</span>
<span>EXPERT COACHES</span>
</div>

<div>
<span>
<NumberCounter end = {978} start ={100} delay = "4" preFix= "+"/>
 </span>
<span>MEMBERS JOINED</span>
</div>

<div>
<span><NumberCounter end = {50} start ={100} delay = "4" preFix= "+"/>
</span>
<span>FITNESS PROGRAMS</span>
</div>
</div>
{/* end figuers */}

{/* start hero-buttons */}
<div className="hero-buttons">
<button  className="btn">Get Started</button>
<button  className=" btn">Learn More</button>
</div>
</div>
 
{/* end section left */}



{/* start section right */}
<div className='right-h' >
  
<button className="btn">Join Now</button>

<motion.div 
initial={{right : "1-rem"}}
whileInView={{right: "4rem"}}
transition={transition}

className="heart-rate">
<img src={Heart} alt="" />
<span>Heart Rate</span>
<span>116 bpm</span>
</motion.div>
{/* img hero */}
<img   src={hero_image} alt="" className='hero-image' />
< motion.img
initial={{right : "11rem"}}
whileInView={{right: "20rem"}}
transition={transition}
src={hero_image_back} alt="" className='hero-image-back' />

 {/* carlious */}
 <motion.div 
 
 
 initial={{right : "37rem"}}
whileInView={{right: "28rem"}}
transition={transition}className="carlious">

  <img src={Calories} alt="" />
  
  <div>
  <span>Calories burned</span> 
  <span>220 kcal</span></div>
 </motion.div>
</div>
</div>
  );
}

export default Hero