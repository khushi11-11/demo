import React, { useState, useEffect } from "react";
import axios from "axios";

function ProgramMgmt(){
    const[prgid, setPrgId]=useState();
    const[prgname, setPrgName]=useState();
    const[prglist, setPrgList]=useState([]);
    const[deptid, setDeptId]=useState();
    const[deptlist, setDeptList]=useState([]);
    var deptname="";

    const handlePrgIdText=(evt)=>{
        setPrgId(evt.target.value);
    }
    const handlePrgNameText=(evt)=>{
        setPrgName(evt.target.value);
    } 
    const handleDeptIdSelect=(evt)=>{
        setDeptId(evt.target.value);
    }

    //display - program and Department list
    useEffect( ()=>{
        axios.get("http://localhost:7777/department/show").then( (res)=>{
            setDeptList(res.data);
        });
        axios.get("http://localhost:7777/program/show").then( (res)=>{
            setPrgList(res.data);
        });
    }, []);

    //save program into db
    const handleSaveButton=()=>{
        var obj = {
            prgid:prgid,
            prgname:prgname,
            deptid:deptid
        };

        axios.post("http://localhost:7777/program/save", obj).then( (res)=>{
            alert("Program Saved !!");
        }).catch( (err)=>{
            alert(err);
        });
    }

    //search Program from the db
    const handleSearchButton=()=>{
        axios.get("http://localhost:7777/program/searchprogram/" + prgid).then( (res)=>{
            setPrgName(res.data.prgname);
            setDeptId(res.data.deptid);
            alert(res.data.prgname);
        }).catch( (err)=>{
            alert(err);
        });
        axios.get("http://localhost:7777/program/getprogrambydeptid/" + deptid).then( (res)=>{
            setPrgId(res.data.prgid);
            setPrgName(res.data.prgname);
            alert(res.data.prgname);
        }).catch( (err)=>{
            alert(err);
        });
    }

    //update program details
    const handleUpdateButton = () => {
        const obj = {
            prgid: prgid,
            prgname: prgname,
            deptid: deptid
        };

        axios.put("http://localhost:7777/program/editprogram", obj).then((res) => {
            alert("Program updated!");
        }).catch((err) => {
            alert("Error updating Program: " + err);
        });
    };
    // const handleUpdateButton=()=>{
    //     var obj = {
    //         prgid : prgid,
    //         prgname : prgname,
    //         deptid : deptid
    //     };
    //     axios.put("http://localhost:7777/Program/editProgram/", obj).then( (res)=>{
    //         alert(res.data);
    //     }).catch( (err)=>{
    //         alert(err);
    //     });
    // }

    //delete any Program entry
    const handleDeleteButton=()=>{
        axios.delete("http://localhost:7777/program/deleteprogram/" + prgid).then( (res)=>{
            setPrgId("");
            setPrgName("");
            setDeptId("");
            alert(res.data);
        }).catch( (err)=>{
            alert(err);
        });
    }

    return(
        <div>
            <center>
            <br />
            <h3>Program Entry Form</h3>
            <table>
                    <tr>
                        <td>Program ID: </td>
                        <td><input type="number" onChange={handlePrgIdText} /></td>
                    </tr>
                    <tr>
                        <td>Program Name: </td>
                        <td><input type="text" onChange={handlePrgNameText} /></td>
                    </tr>
                    <tr>
                        <td>Department: </td>
                        <td>
                            {/* <select onChange={handleDeptIdSelect}>
                                {
                                    deptlist.map((item)=>(
                                        <option value={item.deptid}>{item.deptname}</option>
                                    ))
                                }
                            </select> */}
                            <select onChange={handleDeptIdSelect} value={deptid}>
                                <option value="">Select Department</option>
                                    {
                                        deptlist.map((item) => (
                                            <option key={item.deptid} value={item.deptid}>
                                                {item.deptname}
                                            </option>
                                        ))
                                    }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><button type="submit" onClick={handleSaveButton}>Save</button></td>
                        <td><button type="submit" onClick={handleSearchButton}>Search</button></td>
                    </tr>
                    <tr>
                    <td><button type="submit" onClick={handleUpdateButton}>Update</button></td>
                    <td><button type="submit" onClick={handleDeleteButton}>Delete</button></td>
                    </tr>
                </table>
                <br />
                <h3>Program List</h3>
                <table>
                    <tr>
                        <th>Program ID</th>
                        <th>Program Name</th>
                        <th>Department Name</th>
                    </tr>
                    {
                        prglist.map( (pitem)=>(
                            <tr>
                                <td>{pitem.prgid}</td>
                                <td>{pitem.prgname}</td>
                                {
                                    deptlist.map(ditem=>{
                                        if(pitem.deptid===ditem.deptid)
                                            deptname=ditem.deptname;
                                    })
                                }
                                <td>{deptname}</td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    );
} export default ProgramMgmt;