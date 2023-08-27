// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
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
import SignInPage from './components/forms/SignInPage';
import LandingPage from './components/forms/LandingPage';
import { NavLink } from 'react-router-dom';
import LandingPageTest from './components/forms/LandingPage';
import Hotels from "./components/forms/Hotels";
import PopUpBox from "./components/forms/PopUpBox";
class MyApp extends Component 
{
  render() {
    return (
     <>
      <div>
      {/* <BrowserRouter>
        <Routes>
      
          <Route exact path='/' Component={Loginform} />
          <Route path='/signinpage' Component={SignInPage} />
          <Route path='/landing_page' Component={LandingPageTest} />
        </Routes>
      </BrowserRouter> */}






      {/* <Hotels /> */}
      {/* <LandingPage /> */}
        {/* <Loginform />  */}
        {/* <SignInPage />  */}
           {/* <Navbar />  */}
         {/* <HomePage />  */}
        {/* < Destinations />    */}
         {/* <Herosection />   */}
         {/* <BlogPage />  */}
           {/* <Media />  */}
           {/* <TicketingPage />  */}
           {/* <Footer />       */}

           <PopUpBox />
        </div>

     </>
       
        
     );
  };
};

export default MyApp;