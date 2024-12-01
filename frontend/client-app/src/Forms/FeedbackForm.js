// feedback list will come under admin view

import React, {useState, useEffect} from "react";
import axios from "axios";

function FeedbackForm(){
    const[fid, setFid]=useState();
    const[email, setEmail]=useState();
    const[msg, setMsg]=useState();
    const[feedbacklist, setFeedbacklist] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:7777/feedback/getmaxfid/').then( (res)=>{
            setFid(res.data.length+1);
        }).catch((err)=>{
            alert(err);
        });
    }, [])

    const handleEmailText=(evt)=>{
        setEmail(evt.target.value);
    }
    const handleMsgText=(evt)=>{
        setMsg(evt.target.value);
    }

    const handleSubmit = (event) => {
        var obj = {
            feedback_id : fid,
            emailid : email,
            message : msg
        }
        event.preventDefault();
        axios.post('http://localhost:7777/feedback/feedbacksave/', obj).then( (res)=>{
            alert(res.data);
            setFeedbacklist(res.data);
        }).catch((err)=>{
            alert(err);
        });
        alert('Thank you for your feedback!');

    };

    return(
        <div>
            <center>
                <h1>FEEDBACK FORM</h1>
                <p>This form is mainly for reporting bugs, requesting help, <br/>suggesting ideas or providing a compliment! <br />The feedback posted here will be sent to the website <br/>maintenance team, the DUAA student committee. <br />Please navigate to the <u>Contact Us</u> section if you would like to reach <br/>out to the Admin or Staff of Devi Ahilya University Alumni Association.</p>
                <hr style={{width: '60%',height: '2px',border: 'none',backgroundColor: '#D9D9D9',margin: '20px auto',}} />
                <table>
                    <center>
                    <tr>
                        <td>
                            <input type="text" onChange={handleEmailText} placeholder="abc@example.com" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" onChange={handleMsgText} placeholder="enter your feedback, please.." required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={handleSubmit} >SUBMIT</button>
                        </td>
                    </tr>
                    </center>
                </table>
                </center>
        </div>
    )

} export default FeedbackForm;


// import React, { useState } from 'react';
// // import './App.css';

// function Feedback() {
//   const[fid, setFid]=useState();
//   const[email, setEmail]=useState();
//   const[msg, setMsg]=useState();

//   const handleEmailText=(evt)=>{
    
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Thank you for your feedback!');
//   };

//   return (
//     <div className="feedback-container">
//         <center>
//         {/* <div className="content">
//         <h1>DEVI AHILYA VISHWAVIDYALAYA, INDORE</h1>
//         <p>(Formerly University of Indore) NAAC A+ accredited State University of Madhya Pradesh, India</p> */}

//         <div className="feedback-form">
//           <h2>FEEDBACK</h2>
//           <p>
//             This form is mainly for reporting bugs, requesting help, suggesting ideas, or providing a compliment!
//             The feedback posted here will be sent to the website maintenance team, the DUAA student committee.
//             Please use the <a href="#contact">Contact Us</a> option if you would like to reach out to the Admin of Devi Ahilya University Alumni Association.
//           </p>

//           <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="abc@example.com" required />
//             <textarea placeholder="feedback..." required></textarea>
//             <button type="submit">SUBMIT</button>
//           </form>

//           <p>Thank you for the feedback!</p>
//         </div>
//       {/* </div> */}
//       </center>
//     </div>
//   );
// }

// export default Feedback;
