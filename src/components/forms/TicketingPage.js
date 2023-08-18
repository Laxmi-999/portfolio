import React, { useState } from 'react';
// import { FaBed} from 'react-icons/fa';
import { faBed } from '@fortawesome/fontawesome-free-solid';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TicketingPage.css';

const TicketingPage = () => {
  return (
    <>
      <div className ="header">
        <div className = "headerContainer">
          <div className ="headerList">
             <div className = "headerListItems active">
             <FontAwesomeIcon icon = {faBed}/>
             <span>stay</span>
             </div>
           </div>
        </div>
      </div>
    </>
  )
// 
}
export default TicketingPage;