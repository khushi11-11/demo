import React, { useState, useEffect } from "react";
import axios from "axios";

function AlumniTrack(){
    const [alumnilist, setAlumnilist] = useState([]); //feedback list on display

    useEffect( ()=>{
        axios.get("http://localhost:7777/alumni/getalumnilist").then( (res)=>{
            setAlumnilist(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }, []);

    return(
        <div>
            <center>
                <br />
            <h3>Alumni List</h3>
            <br />
                <table border={1}>
                    <tr>
                        <th> Alumni ID </th>
                        <th> Username </th>
                        <th> Email ID </th>
                        <th> Full name </th>
                        <th> Department </th>
                        <th> Program </th>
                        <th> Batch </th> {/* admission year */}
                        <th> Address </th>
                        <th> Contact Details </th>
                        <th> Alumni Photo </th>
                    </tr>
                    {
                        alumnilist.map( (item)=>(
                            <tr>
                                <td>{item.Aid}</td>
                                <td>{item.AUserName}</td>
                                <td>{item.AEmail}</td>
                                <td>{item.AlumniName}</td>
                                <td>{item.ADepartment}</td>
                                <td>{item.AProgram}</td>
                                <td>{item.AAdmissionYear}</td>
                                <td>{item.AAddress}</td>
                                <td>{item.AContact}</td>
                                <td>
                                <img src={"http://localhost:7777/alumni/getimage/" + item.APicName} height='100' width='100' />
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    )

} export default AlumniTrack;