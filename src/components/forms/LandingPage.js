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
const LandingPageTest = () => {
    const [activeComponent, setActiveComponent] = useState('home');

    const handleNavClick = (component) => {
        // component="home"
        
        
        setActiveComponent(component); //changing activeComponent
    };


    // div<onClick> classname "home"?
        // div<onClick ()=> class name "destination">

            // div<onClick>

                // div<onClick>


    return (

        <div>
            {/* home click-"Home" */}
            <NavigationBar handleNavClick={handleNavClick} />

   
   
         
                {activeComponent === 'home' && <HomePage />}
                {activeComponent === 'blog' && <BlogPage />}
                {activeComponent === 'destination' && <Destinations />}
                {activeComponent === 'media' && <Media />}
                {activeComponent === 'ticketing' && <TicketingPage />}



    
            <Footer />


        </div>

    );
};




export default LandingPageTest;
