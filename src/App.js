import React from 'react'
import Hero from './commponents/Hero'
 import'./App.css'
 import'./index.css'
import Programe from './Programs/Programs'
import Reasonse from './Programs/Reasons/Reasonse'
import Plans from './Plans/Plans'
import Testimonals from './Testimonials/Testimonals'
import Join from './Join/Join'
import Footer from './Footer/Footer'
   
 
 const App = () => {
   return (
     <div className='App'>
      
 

      <Hero/>
     <Programe/>
     <Reasonse/>
     <Plans/>
  <Testimonals/>
  <Join/>
  <Footer/>
      </div>
   )
 }
 
 export default App