import React from 'react'
import './Footer.css'
import Github from '../assets/github.png';
import Instegram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='footer-container'>
<hr/>

<div className='Footer'>
<div className="social-link">
<img src={Github} alt="" />
<img src={Instegram} alt="" />
<img src={LinkedIn} alt="" />
</div>
<div className='blur footer-blur3'></div>
 


<div className='logo-f'>
<img src={Logo} alt="" />
</div>

</div>
</div>
  )
}

export default Footer