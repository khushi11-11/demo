import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import davvLogo from "./davv-logo.svg";
import "./Header.css";
import AlumniRegister from "../Forms/AlumniRegister";
import AlumniLogin from "../Forms/AlumniLogin";
import MainPage from "./MainPage";
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
                            <div className="reg-login">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;


{/* <a className="reg-login" href="#"> */ }
{/* //                                 <Router>
//                                     <Link to="alumniregister">Register</Link>
//                                     <span> :: </span>
//                                     <Link to="alumnilogin">Login</Link>

//                                     <Routes>
//                                         <Route path="alumniregister" element={<AlumniRegister />}>
//                                             <Route path="mainpage" element={<MainPage />} />
//                                         </Route>
//                                         <Route path="alumnilogin" element={<AlumniLogin />}></Route>
//                                     </Routes>
//                                 </Router>
//                                 Register::Login */}

{/* </a> */ }
{/*                              <Router> */ }
{/* <Link to="alumniregister">Register</Link>
//                 <span>   </span>::<span>   </span>
//                 <Link to="alumnilogin">Login</Link> */}

{/* <Routes>
//                     <Route path="alumniregister" element={<AlumniRegister />} />
//                     <Route path="alumnilogin" element={<AlumniLogin />} />
//                 </Routes> */}
{/* //             </Router> */ }


