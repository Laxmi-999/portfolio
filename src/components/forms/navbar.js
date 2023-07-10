import { Component } from "react";
import "./navbar.css";
class Navbar extends Component {
    state = { clicekd: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {

        return (
            <>
                <nav>
                <div className="navbar-container">
                <div className="logo-container">
                    <img src=""></img>
                </div>
                
                    
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <a className="active" href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="index.html">Destinations</a>
                            </li>
                            <li>
                                <a href="index.html">Blog</a>
                            </li>
                            <li>
                                <a href="index.html">Media</a>
                            </li>
                            <li>
                                <a href="index.html">Ticketing</a>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        {/* checking wether the hamburger bar is clicked or not */}
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
                </nav>
            </>
        );
    }
}
export default Navbar;