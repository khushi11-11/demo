import React from 'react'
import "./HomeSection.css";
import AboutUs from './AboutUs';
import AdminLogin from '../AdminView/AdminLogin';
import Header from './Header';

function HomeSection() {
    return (
        <div className="hero-sec">
            <div className="text-div">
                <h1>DUAA-DEVI AHILYA UNIVERSITY ALUMNI ASSOCIATION</h1>
                <p> tempore modi dolor laboriosam? Ipsum, aliquam?
                </p>
                {/* <AdminLogin /> */}
            </div>
            <div className="right-div">
                <div>
            <Header />
        </div>
                <p>
                    <a href="#">FeedBack</a>
                </p>
            </div>
        </div>
    )
}
export default HomeSection;