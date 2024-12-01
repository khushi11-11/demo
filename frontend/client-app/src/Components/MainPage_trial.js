import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./Navbar.css"
import AdminLogin from "../AdminView/AdminLogin";
import AdminHome from "../AdminView/AdminHome";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AlumniAchievers from "./AlumniAcheivers";
import GetInvolved from "./GetInvolved";
import NewsRoom from "./NewsRoom";
import PhotoGallery from "./PhotoGallery";
import ContactUs from "./ContactUs";
import Header from "./Header";



function MainPage_trial() {
    return (
        <div style={{ backgroundColor: "#d0e4c3", minHeight: "100vh", padding: "20px" }}>
            <Header />
            <Router>
                <div style={{ display: "flex", position: "relative" }}>
                    {/* Sidebar */}
                    <nav className="navbar" style={{ width: "20%", backgroundColor: "#f4dfd0", padding: "10px" }}>
                        <ul className="links">
                            <li>
                                <Link to="/adminlogin" className="navlinks">Admin</Link>
                            </li>
                            <li>
                                <Link to="/home" className="navlinks">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="navlinks">About Us</Link>
                            </li>
                            <li>
                                <Link to="/alumniachievers" className="navlinks">Alumni Achievers</Link>
                            </li>
                            <li>
                                <Link to="/getinvolved" className="navlinks">Get Involved</Link>
                            </li>
                            <li>
                                <Link to="/newsroom" className="navlinks">News Room</Link>
                            </li>
                            <li>
                                <Link to="/photogallery" className="navlinks">Photo Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="navlinks">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Central Content with Green Background */}
                    <div style={{
                        width: "80%",
                        padding: "20px",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderRadius: "8px",
                        marginLeft: "20px"
                    }}>
                        <Routes>
                            {/* Admin Routes */}
                            <Route path="adminlogin" element={<AdminLogin />} />
                            <Route path="adminhome" element={<AdminHome />} />

                            {/* Other Routes */}
                            <Route path="home" element={<Home />} />
                            <Route path="aboutus" element={<AboutUs />} />
                            <Route path="alumniachievers" element={<AlumniAchievers />} />
                            <Route path="getinvolved" element={<GetInvolved />} />
                            <Route path="newsroom" element={<NewsRoom />} />
                            <Route path="photogallery" element={<PhotoGallery />} />
                            <Route path="contactus" element={<ContactUs />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default MainPage_trial;
