import React, { useState, useEffect } from "react";
import axios from "axios";

function FeedbackTrack(props){
    const [feedbacklist, setFeedbacklist] = useState([]); //feedback list on display

    useEffect( ()=>{
        axios.get("http://localhost:7777/feedback/show").then( (res)=>{
            setFeedbacklist(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }, []);

    return(
        <div>
            <center>
            <h2>Feedback List</h2>
            <br />
                <table>
                    <tr>
                        <th> Feedback ID </th>
                        <th> Email ID </th>
                        <th> Message </th>
                    </tr>
                    {
                        feedbacklist.map( (item)=>(
                            <tr>
                                <td>{item.feedback_id}</td>
                                <td>{item.emailid}</td>
                                <td>{item.message}</td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    )

} export default FeedbackTrack;