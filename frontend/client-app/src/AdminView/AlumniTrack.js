import React, { useState, useEffect } from "react";
import axios from "axios";

function AlumniTrack(){
    const [alumnilist, setAlumnilist] = useState([]); //feedback list on display
    const [dept, setDept]=useState();
    const [prg, setPrg]=useState();
    const[deptlist, setDeptList]=useState([]); // dept mgmt
    const[prglist, setPrgList]=useState([]); // prg mgmt


    useEffect( ()=>{
        axios.get("http://localhost:7777/alumni/getalumnilist").then( (res)=>{
            setAlumnilist(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }, []);

    // list
    // const handleADeptSelect=(evt)=>{
    //     setADept(evt.target.value);

    //     // department k according program list display krne k liye
    //     axios.get('http://localhost:7777/program/getprogrambydeptid/' + evt.target.value).then((res)=>{
    //         setPrgList(res.data);
    //     }).catch((err)=>{
    //         alert(err);
    //     });
    // }
    // const handleAPrgSelect=(evt)=>{
    //     setAPrg(evt.target.value);
    // }

    // search buttons
    // const handleSearchByDept=(evt)=>{
    //     if(evt.target.value>0){
    //         axios.get("http://localhost:7777/alumni/getalumnidetailsbydeptid/" + evt.target.value).then( (res)=>{
    //             setAlumnilist(res.data);
    //         }).catch( (err)=>{
    //             alert(err);
    //         });
    //     } 
    // }
    // const handleSearchByPrg=(evt)=>{
    //     if(evt.target.value>0){
    //         axios.get("http://localhost:7777/alumni/getalumnidetailsbyprgid/").then( (res)=>{
    //             setAlumnilist(res.data);
    //         }).catch( (err)=>{
    //             alert(err);
    //         });
    //     } 
    // }

    return(
        <div>
            <center>
                <br />
            <h3>Alumni List</h3>
            <br />
            {/* <table>
                <h2>Search Alumni Details By~</h2>
                <tr>
                    <td>Department</td>
                    <td>
                        <select onChange={handleADeptSelect}>
                            <option value="" disabled selected>
                                Select Department
                            </option>
                            {deptlist.map((item) => (
                                <option key={item.deptid} value={item.deptid}>
                                    {item.deptname}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Program</td>
                    <td>
                        <select onChange={handleAPrgSelect}>
                            <option value="" disabled selected>
                                Select Program
                            </option>
                            {prglist.map((items) => (
                                <option key={items.prgid} value={items.prgid}>
                                    {items.prgname}
                                </option>
                                ))}
                        </select>
                    </td>
                </tr>
            </table> */}
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