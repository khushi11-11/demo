import React from 'react';
// import './App.css';

function Feedback() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-container">
        <center>
        <div className="content">
        <h1>DEVI AHILYA VISHWAVIDYALAYA, INDORE</h1>
        <p>(Formerly University of Indore) NAAC A+ accredited State University of Madhya Pradesh, India</p>

        <div className="feedback-form">
          <h2>FEEDBACK</h2>
          <p>
            This form is mainly for reporting bugs, requesting help, suggesting ideas, or providing a compliment!
            The feedback posted here will be sent to the website maintenance team, the DUAA student committee.
            Please use the <a href="#contact">Contact Us</a> option if you would like to reach out to the Admin of Devi Ahilya University Alumni Association.
          </p>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="abc@example.com" required />
            <textarea placeholder="feedback..." required></textarea>
            <button type="submit">SUBMIT</button>
          </form>

          <p>Thank you for the feedback!</p>
        </div>
      </div>
      </center>
    </div>
  );
}

export default Feedback;
