
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import "./MainPage_trial.css";
import AdminLogin from "../AdminView/AdminLogin";
import AdminHome from "../AdminView/AdminHome";
import DepartmentMgmt from "../AdminView/DeptMgmt";
import ProgramMgmt from "../AdminView/ProgramMgmt";
import FeedbackTrack from "../AdminView/FeedbackTrack";
import AlumniTrack from "../AdminView/AlumniTrack";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AlumniAchievers from "./AlumniAcheivers";
import GetInvolved from "./GetInvolved";
import NewsRoom from "./NewsRoom";
import PhotoGallery from "./PhotoGallery";
import ContactUs from "./ContactUs";
import Header from "./Header";
import FeedbackForm from "../Forms/FeedbackForm";
import AlumniLogin from "../Forms/AlumniLogin";
import AlumniRegister from "../Forms/AlumniRegister";


function MainPage() {
    return (
        <div>
            <Header />
            <Router>
                <div className="layout-container">
                    <nav className="navbar">
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

                            <div className="register-btn"><li>
                                <Link to="alumniregister" className="forms">REGISTER</Link>
                                <span>   </span>::<span>   </span>
                                <Link to="alumnilogin" className="forms">LOGIN</Link>
                            </li>
                                <li>
                                    {/* <div className="right-div"> */}
                                    <Link to="feedbackform" className="forms">FeedBack</Link>
                                    <Outlet />
                                    {/* </div> */}
                                </li>
                            </div>
                        </ul>
                    </nav>

                    {/* Right Content Area */}
                    <div className="content">
                        <Routes>
                            {/* Admin Routes */}
                            <Route path="/adminlogin" element={<AdminLogin />} />
                            <Route path="/adminhome" element={<AdminHome />} />

                            {/* Main Page Routes */}
                            <Route path="/home" element={<Home />} />
                            <Route path="/aboutus" element={<AboutUs />} />
                            <Route path="/alumniachievers" element={<AlumniAchievers />} />
                            <Route path="/getinvolved" element={<GetInvolved />} />
                            <Route path="/newsroom" element={<NewsRoom />} />
                            <Route path="/photogallery" element={<PhotoGallery />} />
                            <Route path="/contactus" element={<ContactUs />} />

                            {/* Default Route */}
                            <Route path="/" element={<Home />} />

                            <Route path="adminlogin" element={<AdminLogin />} >
                                <Route path="adminhome/*" element={<AdminHome />} />
                            </Route>


                            {/* Other Routes */}
                            <Route path="home" element={<Home />} />
                            <Route path="aboutus" element={<AboutUs />} />
                            <Route path="alumniachievers" element={<AlumniAchievers />} />
                            <Route path="getinvolved" element={<GetInvolved />} />
                            <Route path="newsroom" element={<NewsRoom />} />
                            <Route path="photogallery" element={<PhotoGallery />} />
                            <Route path="contactus" element={<ContactUs />} />


                            <Route path='feedbackform' element={<FeedbackForm />}></Route>
                            <Route path="alumniregister" element={<AlumniRegister />} />
                            <Route path="alumnilogin" element={<AlumniLogin />} />

                            {/* Admin Nested Routes
                             <Route path="/adminhome" element={<AdminHome />}>
                                 <Route path="departmentmgmt" element={<DepartmentMgmt />} />
                                 <Route path="programmgmt" element={<ProgramMgmt />} />
                                 <Route path="feedbacktrack" element={<FeedbackTrack />} />
                                 <Route path="alumnitrack" element={<AlumniTrack />} />
                             </Route> */}
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default MainPage;