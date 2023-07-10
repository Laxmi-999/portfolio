// import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loginform from "./components/forms/loginform"
import Navbar from './components/forms/navbar';
import Herosection from './components/forms/herosection';
import { Component } from 'react';
import Homepage from './components/forms/HomePage.js';
import Footer  from './components/forms/footer';
import Destinations from './components/forms/Destinations';
import BlogPage from './components/forms/BlogPage';
import Media from './components/forms/Media';
import TicketingPage from './components/forms/TicketingPage';

class MyApp extends Component {
  render() {
    return (``
      // <BrowserRouter>
      //   <Routes>
      //     <Route path = "/" element={<loginform />}  />
      //     <Route path = "/" element={< HomePage />}  />
      //     <Route path = "/" element={< Destinations />}  />
      //     <Route path = "/" element={<BlogPage />}  />
      //     <Route path = "/" element={<Media />}  />
      //  <Route path = "/" element={<TicketingPage />}  />

      //   </Routes>
      // </BrowserRouter>
    //   <Router>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route path="/login" component={LoginFormPage} />
    //     <Route path="/destinations" component={Destination} />
    //     <Route path="/media" component={MediaPage} />
    //     <Route path="/ticketing" component={TicketingPage} />
    //   </Switch>
    // </Router>
    // new code added for new
       <div>

         {/* <Loginform /> */}
         <Navbar /> 
       <Homepage />
         {/* < Destinations />  */}
         {/* <Herosection /> */}
         {/* <BlogPage /> */}
         {/* <Media /> */}
         {/* <TicketingPage /> */}
         <Footer />       
      </div>

    );
  }
}
export default MyApp;