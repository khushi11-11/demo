import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import "./HomeSection.css";
import AboutUs from './AboutUs';
import AdminLogin from '../AdminView/AdminLogin';
import AlumniLogin from '../Forms/AlumniLogin';
import AlumniRegister from '../Forms/AlumniRegister';
import Header from './Header';
import FeedbackForm from '../Forms/FeedbackForm';

function HomeSection(props) {
    return (
        <div className="hero-sec">
            <div className="text-div">
                <h1>DUAA-DEVI AHILYA UNIVERSITY ALUMNI ASSOCIATION</h1>
    
                <p> tempore modi dolor laboriosam? Ipsum, aliquam?</p>
            </div>
            <div className="right-div">
                
                <Link to="feedbackfrom">FeedBack</Link>
                {/* <Routes>
                    <Route path='feedbackfrom' element={<FeedbackForm />}></Route>
                </Routes> */}
                <Outlet />
            </div>
        </div>
    )
}
export default HomeSection;