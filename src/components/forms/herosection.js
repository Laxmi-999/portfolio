import React from 'react';
import './herosection.css';
import Babe from '../app/babe.jpg';

const Herosection = () => {
  return (
   <div className="hero-section">
 
  
    {/* <img src={'C:\REACTPROJECT\navapp\src\components\images\babe.jpg'} alt="hello" /> */}
    <div className='overlay'>
    <div className="hero-content">
        <h1>The Place For Your Enjoyment</h1>
        <span>"Discover the World, Create Memories, and Explore Your Dreams."</span>
        <div className='paragraph'>
        <p>It's important to note that the specific requirements can vary from one university to another. Therefore, it's essential visit the
            official websites of the universities you're interested in and carefully review their admission guidelines and requirements.Reach
            out to their admissions offices if you have any specific questions or need further clarification.</p>
       </div>
       <button className="cta-button">Learn More</button>
     </div>
          
    </div>
    
        
 </div>
 
  );
};

export default Herosection;
