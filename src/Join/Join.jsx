import React, { useRef } from 'react';
import'./Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_og72tah', 'template_hf34sui', form.current, '8d7v9Rx4_mVee449H')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
   <div className='join' id='join'> 
   <div className='left-j'>
<hr/>
    <div>
        <span className='stroke-text'> READY TO </span>
        <span> LEVEL UP </span>
    </div>
 
    <div>
        <span> YOUR BODY</span>
        <span className='stroke-text'> WITH US ? </span>
    </div>
    
   </div>
   
   <div className='right-j'> 
<form  ref={form} className='emaill' action="" onSubmit={sendEmail}>
    <input type="email" name='username' placeholder='Enter Your Emaill Adress Here...' />
    <button className='btn btn-j'>Join  Now</button>
</form>
</div>

   </div>

  )
}

export default Join