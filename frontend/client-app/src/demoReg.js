import React, { useState } from "react";
import "./App.css"; // Import your CSS for styling
import "./davvLogo.jpeg"

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src="./davvLogo.jpeg"
          alt="University Logo"
          className="logo"
        />
        <h1>DEVI AHILYA VISHWAVIDYALAYA, INDORE</h1>
        <p>(Formerly University of Indore) NAAC A+ accredited</p>
        <p>State University of Madhya Pradesh, India</p>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#involved">Get Involved</a></li>
          <li><a href="#alumni">Alumni Achievers</a></li>
          <li><a href="#gallery">Photo Gallery</a></li>
          <li><a href="#news">News Room</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#more">More..</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <h2>REGISTRATION</h2>
        <p>Join our alumni community by creating your profile today!!</p>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="abc@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="set a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>

        <p>
          Already a community member?{" "}
          <a href="#login">Click here to Log-in now !</a>
        </p>
      </main>

      <footer className="footer">
        <a href="#feedback">Feedback</a>
      </footer>
    </div>
  );
};

export default RegistrationForm;
