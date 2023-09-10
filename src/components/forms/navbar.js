// import { Component } from "react";
// import "./navbar.css";
// import {Link} from 'react-router-dom';
// import Destinations from "./Destinations";

// class Navbar extends Component {

//     // Home component
//  HomeC = () => {
//     return <h2>Home Component</h2>;
// };

// // Blog component
//  BlogC = () => {
//     return <h2>Blog Component</h2>;
// };

// // Destination component
//  DestinationC = () => {
//     return <h2>Destination Component</h2>;
// };
// // Blog component
//  MediaC = () => {
//     return <h2>Blog Component</h2>;
// };
//  TicketingC = () => {
//     return <h2>Blog Component</h2>;
// };


// constructor(props) {
//     super(props);
//     this.state = {
//         activeComponent: 'home',
//     };
//   }
//   handleNavClick = (component) => {
//     this.setState({ activeComponent: component });
//   };


//     state = { clicekd: false };
//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked })
//     }
//     render() {
//         const { activeComponent,handleNavClick } = this.props;
//         return (
//             <>
//                 <nav>
//                 <div className="navbar-container">
//                 <div className="logo-container">
//                     <img src=""></img>
//                       </div>


//                         <div>
//                         <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>

//                         {/* <li><Link to="/destination">Destination</Link></li */}
//                                 <li onClick={() => this.handleNavClick('home')}>Home
//                                 {/* <Link className="active" href="index.html" to='/Home'>Home</Link> */}

//                             </li>


//                             <li onClick={() => this.handleNavClick('destination')}>Destination
//                                 {/* <Link href="index.html" to ='/ Destinations'>Destinations</Link> */}
//                             </li>


//                             <li onClick={() => this.handleNavClick('blog')}>Blog
//                                 {/* <Link to='/Blog' href="index.html">Blog</Link> */}
//                             </li>


//                             <li onClick={() => this.handleNavClick('media')}>Media
//                                 {/* <Link to='/Media' href="index.html">Media</Link> */}
//                             </li>


//                               <li onClick={() => this.handleNavClick('ticketing')}>Ticketing
//                                 {/* <Link to='/Ticketing' href="index.html">Ticketing</Link> */}
//                             </li>  


//                         </ul>
//                     </div>
//                     <div id="mobile" onClick={this.handleClick}>
//                         {/* checking wether the hamburger bar is clicked or not */}
//                         <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                     </div>
//                 </div>
//                 </nav>
//             </>
//         );
//     }
// }
// export default Navbar;

// import React from 'react';

import React, { useState } from 'react';


const NavigationBar = ({ handleNavClick, activeComponent }) => {


    const getComponentStyle = (componentName) => {
        if (componentName === activeComponent) {
            // Apply active component styles
            return {
                color: 'yellow',
                paddingLeft: '100px', // Horizontal padding on the left side
                paddingRight: '100px',
                textDecoration: 'underline',
                fontSize: '100px',

                fontWeight: 'bold',
            };
        } else {
            // Apply other component styles
            return {
                paddingLeft: '100px', // Horizontal padding on the left side
                paddingRight: '100px',
                color: 'black',

                fontSize: '80px', // Update the font size as desired
            };
        }
    };
    return (
        <div style={styles.container}>
             <div className="navbar-container">
                 <div className="logo-container">
                 <img src=''></img>
                </div>
             </div>
            <ul style={styles.nav}>
                <li className={activeComponent === 'destination' ? 'active' : 'notActive'} onClick={() => {
                    handleNavClick('destination');
                }} style={getComponentStyle('destination')}>Destination</li>

                <li className={activeComponent === 'blog' ? 'active' : 'notActive'} onClick={() => {
                    handleNavClick('blog');
                }} style={getComponentStyle('blog')}>Blog</li>
                <li className={activeComponent === 'media' ? 'active' : 'notActive'} onClick={() => {
                    handleNavClick('media');
                }} style={getComponentStyle('media')}>Media</li>



                {/* <li className={activeComponent === 'ticketing' ? 'active' : 'notActive'} onClick={() => {
                    handleNavClick('ticketing');

                }} style={getComponentStyle('ticketing')} >Ticketing</li> */}

                <li
                    className={activeComponent === 'home' ? 'active' : 'notActive'} onClick={() => {
                        handleNavClick('home');
                    }}

                    style={getComponentStyle('home')}
                >
                Home</li>
            </ul>
        </div>
    );
};



const styles = {
    container: {
        width: '100%',
        height: '200px',
        backgroundColor: 'purple',
        position: 'relative',

    },
    
    nav: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor: 'purple',
        top: '0',

    },

};

export default NavigationBar;
