import React from "react";
import "./Navbar.css";
function Navbar() {
    return (
        <div>
            <nav className="navbar"> 
                <div className="navbar-content">
                    <ul className="links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Get Involved</a>
                        </li>
                        <li>
                            <a href="#">Alumni Achievers</a>
                        </li>
                        <li>
                            <a href="#">Photo Gallery</a>
                        </li>
                        <li>
                            <a href="#">News Room</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">More...</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
} export default Navbar;