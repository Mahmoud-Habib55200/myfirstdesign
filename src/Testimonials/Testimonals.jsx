import React, { useState } from 'react'
import './Testimonals.css'
import {testimonialsData} from '../data/testimonialsData'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import { motion } from "framer-motion"


const Testimonals = () => {
  const transition = { type: 'spring' , duration: 3};

const [selected , setselected] = useState(0)
const tLength = testimonialsData.length
  return (
    <div className='Testimonals'>
      <div className="left-t">
<span>TESTIMONIALS</span>
<span className='stroke-text'>WHAT THEY</span>
<span>SAY ABOUT US</span>
<span>
    {testimonialsData[0].review}
</span>
<span>
    <span style={{color:"var(--orange)"}}>
        {testimonialsData[selected].name}
    </span> {" "}
    _ {testimonialsData[selected].status}
</span>
      </div>
      <div className="right-t">
        <motion.div
        initial = {{ opacity: 1 , x: -100 }}
        transition = {{...transition , duration :2 }}
        whileInView = {{ opaity: 1 , x: 0 }}
        ></motion.div>
        <motion.div
           initial = {{ opacity: 1 , x: 100 }}
           transition = {{...transition , duration:2}}
           whileInView = {{ opaity: 1 , x: 0 }}
        ></motion.div>


        <motion.img
        key={selected}
        initial = {{ opacity: 0 , x: 100 }}
        animate = {{opacity:1 ,x:0}}
        exit = {{ opaity: 0 , x: -100 }}
        teansition ={{transition}}
        src={testimonialsData[selected].image} alt="" />
       
<div className="arrows">
    <img 
    onClick={() => {
        selected === 0
        ? setselected (tLength - 1)
        : setselected ((prev) => prev -1);
    }}
    src={leftArrow} 
    alt="" 
    />



    <img
    onClick={() => {
        selected === tLength - 1 
    ? setselected(0) 
    : setselected((prev) =>  prev + 1);

    }}
    src={rightArrow} 
    alt=""
     />

</div>
</div>
</div>
  )
}

export default Testimonals
