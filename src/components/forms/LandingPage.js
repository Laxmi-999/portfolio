import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavigationBar from './navbar';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import Destinations from './Destinations';
import Media from './Media';
import TicketingPage from './TicketingPage';
import Footer from './footer';



// App component

const defaultDestination = {
    id: "",
    name: "",
    imageUrl: "",
    price: 0,
    description: ""

};
const LandingPageTest = () => {
    const [activeComponent, setActiveComponent] = useState('home');
    const [selectedDestination, setSelectedDestination] = useState(defaultDestination);


    const handleNavClick = (component, selectedDestination = defaultDestination) => {


        setActiveComponent(component);
        setSelectedDestination(selectedDestination);
    };





    return (

        <div>
            <NavigationBar handleNavClick={handleNavClick} activeComponent={activeComponent} />



            {activeComponent === 'home' && <HomePage />}
            {activeComponent === 'blog' && <BlogPage />}
            {activeComponent === 'destination' && <Destinations onClick={handleNavClick} />}
            {activeComponent === 'media' && <Media />}
            {/* {activeComponent === 'ticketing' && <TicketingPage selectedDestination={selectedDestination} />} */}




            <Footer />


        </div>

    );
};




export default LandingPageTest;
