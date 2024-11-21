import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import "./index.css";

import AdminLogin from "../AdminView/AdminLogin";
import AdminHome from "../AdminView/AdminHome";

import Home from "./Home";
import AboutUs from "./AboutUs";
import AlumniAchievers from "./AlumniAcheivers";
import GetInvolved from "./GetInvolved";
import NewsRoom from "./NewsRoom";
import PhotoGallery from "./PhotoGallery";
import ContactUs from "./ContactUs";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-content">
                    {/* <Router> */}
                        <nav>
                            <Link to="adminlogin">Admin</Link>
                            <span> </span><br />
                            <Link to="home">Home</Link>
                            <span> </span><br />
                            <Link to="aboutus">About Us</Link>
                            <span> </span> <br />
                            <Link to="alumniachievers">Alumni Acheivers</Link>
                            <span> </span><br />
                            <Link to="getinvolved">Get Involved</Link>
                            <span> </span> <br />
                            <Link to="newsroom">News Room</Link>
                            <span> </span> <br />
                            <Link to="photogallery">Photo Gallery</Link>
                            <span> </span><br />
                            <Link to="contactus">Contact Us</Link>
                            <span> </span> <br />
                        </nav>

                        <Routes>
                            {/* admin */}
                            {/* <Route path="/adminmain" element={<AdminMain />}> */}
                            <Route path="adminlogin" element={<AdminLogin />}>
                                <Route path="adminhome" element={<AdminHome />} />
                            </Route>
                            {/* </Route>  */}

                            <Route path="home" element={<Home />} />
                            <Route path="aboutus" element={<AboutUs />} />
                            <Route path="alumniachievers" element={<AlumniAchievers />} />
                            <Route path="getinvolved" element={<GetInvolved />} />
                            <Route path="newsroom" element={<NewsRoom />} />
                            <Route path="photogallery" element={<PhotoGallery />} />
                            <Route path="contactus" element={<ContactUs />} />

                        </Routes>
                    {/* </Router> */}
                </div>
            </nav>
        </div>
    )
} export default Navbar;