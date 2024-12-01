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
import HomeSection from "./HomeSection";

function MainPage() {
    return (
        <div>
            <Header />
            <Router>
                <nav className="navbar">
                    <div>
                        <div className="left-div">
                            <ul className="links">
                                <li>
                                    <Link to="adminlogin" className="navlinks">Admin</Link>
                                    <span> </span><br />
                                </li>
                                <li>
                                    <Link to="home" className="navlinks">Home</Link>
                                    <span> </span><br />
                                </li>
                                <li>
                                    <Link to="aboutus" className="navlinks">About Us</Link>
                                    <span> </span> <br />
                                </li>
                                <li>
                                    <Link to="alumniachievers" className="navlinks">Alumni Acheivers</Link>
                                    <span> </span><br />
                                </li>
                                <li>
                                    <Link to="getinvolved" className="navlinks">Get Involved</Link>
                                    <span> </span> <br />
                                </li>
                                <li>
                                    <Link to="newsroom" className="navlinks">News Room</Link>
                                    <span> </span> <br />
                                </li>
                                <li>
                                    <Link to="photogallery" className="navlinks">Photo Gallery</Link>
                                    <span> </span><br />
                                </li>
                                <li>
                                    <Link to="contactus" className="navlinks">Contact Us</Link>
                                    <span> </span> <br />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div> <HomeSection /></div>
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
            </Router>
        </div>
    );
} export default MainPage;

// useRef (just like ptr) k liye evt ni bnana pdega, Unlike useState() no variable or evt mgmt is required 