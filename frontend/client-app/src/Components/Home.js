import React from 'react';
import './Home.css';
import college from "./college_img.jpg";
import upi_img from "./upi_img.png";
import alumni_meet from "./alumni_meet.jpeg";
import img1 from "./img1.jpeg";

function Home() {
    return (
        <div className="alumni-association">
            <div className="top-section">
                <div className="left-section">
                    <h3>Welcome to the DAVV Alumni Association</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quis odio perspiciatis culpa esse eligendi accusamus omnis optio quam repudiandae, error ipsum hic quibusdam rem soluta, incidunt vel deserunt iusto.
                    </p>
                </div>
                <div className="right-section">
                    <img src={college} alt="davv Building" />
                </div>
            </div>
            <div className="alumni-engagement">
                <h2>DAVV Alumni Engagement</h2>
                <p>
                    The main objectives of the Alumni Association are to bring all alumni
                    spread across the globe into a single network and connect among them and
                    with the Institute to strengthen the bond between its members and the
                    Institute and work towards a shared common interest.
                </p>
                <div className="feature-cards">
                    <div className="feature-card">
                        <img src={alumni_meet} alt="Humour" />
                        <h3>ALUMNI MEET</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, asperiores.</p>
                    </div>

                    <div className="feature-card">
                        <img src={img1} alt="Stories" />
                        <h3>STORIES</h3>
                        <p>Share your stories and connect with your community</p>
                    </div>

                    <div className="feature-card">
                        <img src={upi_img} alt="Payments" />
                        <h3>PAYMENTS</h3>
                        <p>Scan and pay through UPI Payments for smooth operations</p>
                    </div>
                </div>
            </div>
            <div className="message">
                <div className="text">
                    <h2>Message From Vice Chancellor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, modi veniam et minima reiciendis quidem asperiores illum, tempora beatae ipsam dolores rerum odio nisi quaerat temporibus perspiciatis quo autem magnam?</p>
                    <h3>Lorem ipsum dolor sit.</h3>
                </div>
                <div className="img">
                    <img src={college} alt="college-image" />
                </div>
            </div>
        </div>
    );
};
export default Home;
