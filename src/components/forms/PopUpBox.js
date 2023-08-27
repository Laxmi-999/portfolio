import React from 'react';
import Model from "./Model";
import { useState } from 'react';
  

const PopUpBox = () =>{
 const [openModel, setOpenModel] = useState(false);
    return(
        <>
        <div className='btn-container'>
        <button 
        className='open-model-button'
        onClick={() =>{
        setOpenModel(true);
        }}>
        Book Now
        </button>
        {openModel && <Model  openModel ={openModel}  setOpenModel = {setOpenModel}/>
  }     </div>
            
        </>
    );
};
export default PopUpBox;