import React from 'react';
import './HomePage.css';
import Navbar from './navbar';
import Herosection from './herosection';
import Footer from './footer';
import { Component } from 'react';

const HomePage = () => {

  return (
    <div className="home-page">


      <Herosection />
      {/* <Footer /> */}
    </div>

  );
 
};

export default HomePage;
