import React, { useState } from 'react'
import './Header.css'
 import Logo from '../assets/logo.png'
 import Bars from '../assets/bars.png'
import {Link} from "react-scroll"


const Header = () => {

const mobile = window.innerWidth<=768 ? true : false;
const[menue , setmenue] = useState(false);

  return (
    <div className='header'>  
    
     <img src={Logo} alt="" className='logo' />
     {(menue === false && mobile ===true)?
    (
      <div
      style={{backgroundColor:"var(--appColor)", padding:"0.5rem",borderRadius:"5px"}} 
      onClick={()=>setmenue(true) }

      ><img src={Bars} alt="" style={{width:"1.5rem",height:"1.5rem"}} /></div>
    ):<ul  style={{flexDirection:"column"}} className='header-menue' style={{display:"flex"}}>
    <li onClick={()=> setmenue (false)} >
       <Link to='header' spy={true} smooth={true} >Home</Link>
       </li>
  
    <li onClick={()=> setmenue (false)} ><Link to='Programs' spy={true} smooth={true} >Programs</Link> </li>
 
    <li onClick={()=> setmenue (false)} ><Link to=' reasonse' spy={true} smooth={true} > Why Us</Link>  </li>
    <li onClick={()=> setmenue (false)} >  <Link to='Plans' spy={true} smooth={true} >Plans</Link> </li>
    <li onClick={()=> setmenue (false)} >
     <Link to='Testimonals' spy={true} smooth={true} >Testimonials</Link>
   
       </li>
  
  </ul>
  
    }

    </div>
  )
}

export default Header