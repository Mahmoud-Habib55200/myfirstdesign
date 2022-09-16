import React from 'react'
import './Programs.css'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='Programs' id='Programs'>
        
        {/* start section */}
        <div className="Programs-header">
            <span className='stroke-text' >EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>
        
<div className='programe-categories'>

{programsData.map((Program) => (
  <div className="catogary">
    {Program.image}
    <span>{Program.heading}</span>
    <span>{Program.details}</span>


<div className="join-now">
  <span>Join-now</span>
  <img src={RightArrow} alt="" />
</div>
  </div>
))



}

</div>

         </div>
  )
}

export default Programs