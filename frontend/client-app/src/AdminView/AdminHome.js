// yha hum alumni data denge admin ko
// department aur program list bhi yhi edit hoga

// const AdminHomePage = () => {
//     return <div>Welcome to Admin Home</div>;
//   };
//   export default AdminHomePage;

import React from "react";
import { Outlet,Link,Route,Routes } from "react-router-dom";
import "../index.css";
import DepartmentMgmt from "./DeptMgmt";
import ProgramMgmt from "./ProgramMgmt";

function AdminHome(){
    return(
        <div>
            <center>
                <h4>Admin Home Page</h4>
                <DepartmentMgmt />
                <ProgramMgmt />
        
                <Outlet /> 
            </center>
        </div>
    );
} export default AdminHome;
