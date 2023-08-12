import React from 'react';
import './HomePage.css';
import Navbar from './navbar';
import Herosection from './herosection';
import Footer from './footer';
import { Component } from 'react';

const HomePage = () => {
  
    return (
      <div className="home-page">


         {/* <Navbar /> */}
        <Herosection />
        {/* <Footer />  */}
         {/* <Homepage /> */}
      </div> 

    );
    // return (
    // <div className="home-page">
    //   <section className="navbar-bg">
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container">
    //     <a className='navbar-brand' href="#">
    //       LuxxyTravel
    //     </a>
    //       <ul>
    //         <li>Home</li>
    //         <li>Destinations</li>
    //         <li>Blog</li>
    //         <li>Media</li>
    //         <li>Ticketing</li>
    //       </ul>
    //       </div>
    //     </nav>
    //     </section>
   
    //   <main>
    //     <section className="hero-section">
    //       <h2>Discover the World</h2>
    //       <p>Short and sweet title slogan about travelling</p>
    //       <div className="slideshow">
    //         <img src="trekking-image1.jpg" alt="Trekking Image 1" />
    //         <img src="trekking-image2.jpg" alt="Trekking Image 2" />
    //         <img src="trekking-image3.jpg" alt="Trekking Image 3" />
    //       </div>
    //     </section>
    //   </main>
    //   <footer className="footer">
    //     <div className="contact-details">
    //       <p>Email: info@travelagency.com</p>
    //       <p>Phone: +1 123-456-7890</p>
    //       <p>Address: 123 Street, City, Country</p>
    //     </div>
    //   </footer> 
    //  </div>
    // );
};

export default HomePage;
