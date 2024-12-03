// feedback list will come under admin view
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedbackForm.css";

function FeedbackForm() {
    const [fid, setFid] = useState();
    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();
    const [feedbacklist, setFeedbacklist] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:7777/feedback/getmaxfid/').then((res) => {
            setFid(res.data.length + 1);
        }).catch((err) => {
            alert(err);
        });
    }, [])

    const handleEmailText = (evt) => {
        setEmail(evt.target.value);
    }
    const handleMsgText = (evt) => {
        setMsg(evt.target.value);
    }

    const handleSubmit = (event) => {
        var obj = {
            feedback_id: fid,
            emailid: email,
            message: msg
        }
        event.preventDefault();
        axios.post('http://localhost:7777/feedback/feedbacksave/', obj).then((res) => {
            alert(res.data);
            setFeedbacklist(res.data);
        }).catch((err) => {
            alert(err);
        });
        alert('Thank you for your feedback!');

    };

    return (
        <div className="feedback">
            <center>
                <h1>FEEDBACK FORM</h1>
                <p>This form is mainly for reporting bugs, requesting help, <br />suggesting ideas or providing a compliment! <br />The feedback posted here will be sent to the website <br />maintenance team, the DUAA student committee. <br />Please navigate to the <u>Contact Us</u> section if you would like to reach <br />out to the Admin or Staff of Devi Ahilya University Alumni Association.</p>
                <hr style={{ width: '60%', height: '2px', border: 'none', backgroundColor: '#D9D9D9', margin: '20px auto', }} />
                <table>
                    <center>
                        <tr>
                            <td>
                                <input type="text" onChange={handleEmailText} placeholder="abc@example.com" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={handleMsgText} placeholder="enter your feedback, please.." required />
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



