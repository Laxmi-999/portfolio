import React  from "react";
import HotelsMenu from "./hotelsMenu";
import { useState } from "react";
import  "./Hotels.css";
 

const Hotels = () => {
    const [Hmenu, setItems] = useState(HotelsMenu);
    return(
        <>
         <div className="detailContainer">
         <div className='row-before my-5  grid-container'>
            {Hmenu.map((curElem) =>   {
             const { id, name, image, description, facilities, feedback, ratingText,price } = curElem;
             return (
            
            <div  key={id} className='item1 col-12 col-md-6 col-lg-6 col-xl-6 grid-item'>
            <div className='row item-inside'>
             <div  key ={id}className="img-container">
             <img 
               className ="HotelImg"
                src = {image}
               />
             </div>
              
        
            <div className="hotelDescription">
               <div className="hotelHeading">
                 <h1 className="hotelName">{name}</h1>
               </div>
               <button className="attraction"> attraction</button>

                <div className = "description-container">
                  <span className="hotelFacility"> {description} </span>
                  <span className="hotelFeature"> {facilities}</span>
                   <span className="hotelCancelation">{feedback}</span>
               </div>
            </div>
            <div className="hotelDetails">
              <div className="rating-container">
               <span className="rating-text">{ratingText}</span>
               <button>10</button>
              </div>

              <div className="checkDetails">
                <sapn  className ="price"> {price}</sapn>
                <span  className="charge-details">cost per stay</span>
                <button>see availablity</button>

              </div>
            </div>
            </div>
        </div>  
     );})} 
    </div>
  </div>
 </>
   )
}
export default Hotels;


{/* for more Hotels */}
{/* <div className="detailContainer">
             <div className="img-container">
             <img 
               className ="HotelImg"
                src = "./img/Gk--1.jpg"
               />
             </div>
              
        
            <div className="hotelDescription">
               <div className="hotelHeading">
                 <h1 className="hotelName">Namaste Nepal guest house</h1>
               </div>
               <button className="attraction"> free wifi</button>

                <div className = "description-container">
                  <span className="hotelFacility"> there is good faciliy for the tourist </span>
                  <span className="hotelFeature"> *attach bathroom *hot shaowr *full bed</span>
                   <span className="hotelCancelation">free cancelation</span>
               </div>
            </div>
            <div className="hotelDetails">
              <div className="rating-container">
               <span className="rating-text">Excellance</span>
               <button>10</button>
              </div>

              <div className="checkDetails">
                <sapn  className ="price"> Rs.800</sapn>
                <span  className="charge-details">cost per stay</span>
                <button>see availablity</button>

              </div>
            </div>
      </div> */}