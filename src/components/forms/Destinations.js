import React from 'react';
import './Destinations.css';
const Destinations = () => {
    const destinations = [
        {
            name: 'Mardi Himal Trek',
            description: ' we offer 3 days short and sweet trek to Mardi Himal',
            imageUrl:'./images/mardi.jpg',
        },
        {
            name: 'Gosaikunda Trek',
            description: 'we offer 5 days amazing trek to Gosaikunda',
            imageUrl: '',
        },
        {
            name: 'ABC Trek',
            description: 'Description of destination 3',
            imageUrl: 'destination3.jpg',
        },
        {
            name: 'Manang',
            description: 'Description of destination 4',
            imageUrl: 'destination4.jpg',
        },
    ];

    return (
        <div className="destinations-container">
            <h1 className="destinations-heading">Destinations</h1>
            <div className="destination-grid">

                {destinations.map((destination, index) => (
                    <div className="destination-card" key={index}>
                    {/* <figure>
                        <img  src ={require('./images/mardi.jpg')} alt = {Gosaikunda} />
                    </figure> */}

                        <img className="destination-image" src={destinations[index].imageUrl} alt={destination.name}  height={200} width={200}/>
                        <h2 className="destination-name">{destination.name}</h2>
                        <p className="destination-description">{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
