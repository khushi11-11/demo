import React from "react";
import davvLogo from "./davv-logo.svg";
import "./Header.css";
function Header() {
    return (
        <div>
            <header className="header">
                <div className="header-content">
                    <div className="logo-container">
                        <img
                            src={davvLogo}
                            alt="Devi Ahilya Vishwavidyalaya Logo"
                            className="logo"
                        />
                    </div>
                    <div className="text-container">
                        <h1>DEVI AHILYA VISHWAVIDYALAYA, INDORE</h1>
                        <div className="secondary-container">
                            <p className="secondary-text">
                                (Formerly University of Indore) NAAC A+ accredited <br />
                                State University of Madhya Pradesh, India
                            </p>
                            <a className="reg-login" href="#">
                                Register::Login
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
} export default Header;