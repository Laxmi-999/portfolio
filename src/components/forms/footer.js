import React from 'react';
import './footer.css';
import { FaFacebook } from "@fortawesome/react-fontawesome";
import { FaFacebookSquare} from "@fortawesome/free-solid-svg-icons";
 import { faFacebook, FaInstagram} from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebookSquare } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content grid-two-column">
         <div className='about-footer'>
           <h4>Quick Links</h4>
             <div className='links-items'>
               <ul >
                <li>Home</li>
                <li>Destinations</li>
                <li>Blog</li>
                <li>Media</li>
               </ul>

             </div>
         </div>

         <div className='privacy'>
           <h4>Privacy</h4>
            <ul className='privacy-list'>
              <li>Privacy Policies</li>
              <li>Terms and Conditions</li>
            </ul>
         </div>

         <div className='footer-contact'>
             <h5>Contact Us</h5>
             <ul className='contact-list'>
               <li>Bharatpur-10,Chitwan</li>
               <li>Phone No:9824543632</li>
               <li>Email:regmilaxmi325@gmail.com</li>
             </ul>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
