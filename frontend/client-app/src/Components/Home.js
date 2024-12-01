import React from "react";
import "./Home.css";
import college from "./college_img.jpg";
function Home() {
    return (
        <div className="hero">
            <div className="left">
                <h3>Welcome To DAVV Alumni Association</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint tempora excepturi eius iusto modi, culpa quibusdam quam nulla laboriosam. Voluptatem ea odio fugiat, reiciendis ad exercitationem consectetur! Deleniti, saepe ab.</p>
            </div>
            <div className="right">
                <img src={college} alt="college-image" />
            </div>
        </div>

    )
} export default Home;