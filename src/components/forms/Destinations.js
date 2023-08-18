import React, { useState } from 'react';
import './Destinations.css';
import DestinationMenu from './destinationMenu.js';

const Destinations = () => {
    const [dmenu, setItems] = useState(DestinationMenu);
    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Choose your Favourite Destinations</h1>

            {/* My main destinations items */}
            <div className='Destinations-container container-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto column-container'>
                        <div className='row-before my-5  grid-container'>

                            {dmenu.map((curElem) => {
                                const { id, name, image, description, price, feedback } = curElem;

                                return (
                                    <div  key={id} className='item1 col-12 col-md-6 col-lg-6 col-xl-6 grid-item'>
                                        <div className='row item-inside'>
                                            {/* For images only */}
                                            <div className='img-div col-12 col-md-12 col-lg-4'>
                                                <img src={image} alt={`Destination ${id}`} className='img-fluid' />
                                            </div>
                                            {/* For destination description */}
                                            <div className='description container col-12 col-md-12 col-lg-8'>
                                                <div className='destination-name '>
                                                    <h1>{name}</h1>
                                                    <p>{description}</p>
                                                </div>
                                                {/* <div className='package-price  d-flex'> */}
                                                    {/* <div className='package-book d-flex justify-content-between'></div> */}
                                                <div className = 'price'> <h2 >{price}</h2></div>
                                                    <div className='button'>
                                                           <a href="#">
                                                            <button className='booking-btn'>Book Now</button>
                                                           </a>
                                                    </div>
                                                {/* </div> */}
                                                <p className='feedback'>{feedback}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}




export default Destinations;
