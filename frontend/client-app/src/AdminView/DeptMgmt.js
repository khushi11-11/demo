import React, { useState, useEffect } from "react";
import axios from "axios";

function DepartmentMgmt(){
    const[deptid, setDeptId]=useState();
    const[deptname, setDeptName]=useState();
    const[deptlist, setDeptList]=useState([]);

    const handleDeptIdText=(evt)=>{
        setDeptId(evt.target.value);
    }
    const handleDeptNameText=(evt)=>{
        setDeptName(evt.target.value);
    }
    
    //department display
    useEffect( ()=>{
        axios.get("http://localhost:7777/department/show").then( (res)=>{
            setDeptId(parseInt(res.data[res.data.length-1].deptid)+1);
            setDeptList(res.data);
        });
    }, []);

    //save
    const handleSaveButton=()=>{
        var obj = {
            deptid : deptid,
            deptname : deptname
        };

        // axios.post("http://localhost:7777/department/save/", obj).then( (res)=>{
        //     alert("Department Saved !!");
        // }).catch( (err)=>{
        //     alert(err);
        // });
        axios.post('http://localhost:7777/department/save/', obj).then((res) => {
            alert('Department Saved !!');
        }).catch((err) => {
            alert('Error: ' + err.message);
        });
    }
    



    //search
    const handleSearchButton=()=>{
        axios.get("http://localhost:7777/department/searchdepartment/" + deptid).then( (res)=>{
            setDeptName(res.data.deptname);
            alert(res.data.deptname);
        }).catch( (err)=>{
            alert(err);
        });
    }

    //update
    const handleUpdateButton=()=>{
        var obj = {
            deptid : deptid,
            deptname : deptname
        };
        axios.put("http://localhost:7777/department/editdepartment/", obj).then( (res)=>{
            alert(res.data);
        }).catch( (err)=>{
            alert(err);
        });
    }

    //delete
    const handleDeleteButton=()=>{
        axios.delete("http://localhost:7777/department/deletedepartment/" + deptid).then( (res)=>{
            setDeptId("");
            setDeptName("");
            alert(res.data);
        }).catch( (err)=>{
            alert(err);
        });
    }

    return(
        <div>
            <center>
            <br />
                <h3>Department Entry Form</h3>
                <table>
                    <tr>
                        <td>Department ID: </td>
                        {/* <td>{deptid}</td> */}
                        <td><input type="text" onChange={handleDeptIdText} /></td>
                    </tr>
                    <tr>
                        <td>Department Name: </td>
                        <td><input type="text" onChange={handleDeptNameText} /></td>
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
                <h3>Department List</h3>
                <table>
                    <tr>
                        <th>Department ID</th>
                        <th>Department Name</th>
                    </tr>
                    {
                        deptlist.map( (item)=>(
                            <tr>
                                <td>{item.deptid}</td>
                                <td>{item.deptname}</td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    );
} export default DepartmentMgmt;