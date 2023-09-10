// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/forms/navbar';
import Herosection from './components/forms/herosection';
import { Component } from 'react';
import HomePage from './components/forms/HomePage';
import Loginform from './components/forms/Loginform';
import Footer from './components/forms/footer';
import Destinations from './components/forms/Destinations';
import BlogPage from './components/forms/BlogPage';
import Media from './components/forms/Media';
import TicketingPage from './components/forms/TicketingPage';
import SignUpPage from './components/forms/SignUpPage';
import LandingPage from './components/forms/LandingPage';
import { NavLink } from 'react-router-dom';
import LandingPageTest from './components/forms/LandingPage';

import Hotels from "./components/forms/Hotels";
import PopUpBox from "./components/forms/PopUpBox";
import db from './components/forms/init_firebase';
import { useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import App from './components/forms/firebase_test'
class MyApp extends Component {
  render() {

    return (
      <>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' Component={Loginform} />
              <Route path='/signup' Component={SignUpPage} />
              <Route path='/landing' Component={LandingPageTest} />
              <Route path='/ticketing' Component={TicketingPage} />

            </Routes>

          </BrowserRouter>




          {/* <Hotels /> */}
          {/* <LandingPage /> */}
          {/* <Loginform /> */}

          {/* <Navbar />  */}

          {/* < Destinations />    */}
          {/* <Herosection />   */}
          {/* <BlogPage />  */}
          {/* <Media />  */}
          {/* <TicketingPage />  */}
          {/* <Footer />       */}
          {/* <App /> */}

          {/* <PopUpBox /> */}
        </div>

      </>


    );
  };
};

export default MyApp;