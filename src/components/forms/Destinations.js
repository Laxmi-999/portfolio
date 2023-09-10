import React, { useEffect, useState } from 'react';

import './Destinations.css';
import TicketingPage from './TicketingPage';
// import { DestinationMenuC, GetDestinations } from './destinationMenu.js';
import Db from './init_firebase';
import { useNavigate } from 'react-router-dom';



import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';// import { getFirestore, collection, ge\tDocs } from 'firebase/firestore/lite';







const Destinations = ({ onClick }) => {



    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [destinations, setDestinations] = useState([]);


    useEffect(() => {

        const fetchDestinations = async () => {
            try {
                const destinationColl = collection(Db, 'Destinations');
                const destinationSnapshot = await getDocs(destinationColl);
                const destinationList = destinationSnapshot.docs.map((doc) => doc.data());
                console.log(destinationList);



                setDestinations(destinationList);
                setLoading(false);
            } catch (error) {
                console.error("Error getting documents: ", error);
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);




    return (
        <>


            {loading ? (
                <p className='destination-loader'>Loading...</p> // Display a loading message or spinner while data is being fetched
            ) :
                (

                    < div className='Destinations-container container-fluid mt-5'>
            
                        <h1 className='mt-5 text-center main-heading'>Choose your Favourite Destinations</h1>
                        <div className='row'>
                            <div className='col-11 mx-auto column-container'>
                                <div className='row-before my-5  grid-container'>

                                    {destinations.map((curElem) => {

                                        return (
                                            <div key={curElem.imageUrl} className='item1 col-12 col-md-6 col-lg-6 col-xl-6 grid-item'>
                                                <div className='row item-inside'>
                                                    {/* For images only */}
                                                    <div className='img-div col-12 col-md-12 col-lg-4'>
                                                        <img src={curElem.imageUrl} alt={`Destination ${curElem.imageUrl}`} className='img-fluid' />
                                                    </div>
                                                    {/* For destination description */}
                                                    <div className='description container col-12 col-md-12 col-lg-8'>
                                                        <div className='destination-name '>
                                                            <h1>{curElem.name}</h1>
                                                            <p>{curElem.description}</p>
                                                        </div>
                                                        {/* <div className='package-price  d-flex'> */}
                                                        {/* <div className='package-book d-flex justify-content-between'></div> */}
                                                        <div className='price'> <h2 > Rs.{curElem.price}</h2></div>
                                                        <div className='button'>
                                                            <a href="#">
                                                                <button
                                                                    onClick={() => {

                                                                        navigate("/ticketing", { state: { data: curElem } });

                                                                        // onClick(, curElem);



                                                                    }} className='booking-btn'>Book Now</button>
                                                                {/* <Routes>
                                                                <Route path="/" element={<Destinations />} />
                                                                <Route path="/TicketingPage" element={<TicketingPage />} />
                                                                </Routes> */}
                                                            </a>
                                                        </div>
                                                        {/* </div> */}
                                                        <p className='feedback'>Feedback section</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div >)
            }
        </>
    );


}




export default Destinations;
