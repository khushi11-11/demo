
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../index.css";
import DepartmentMgmt from "./DeptMgmt";
import ProgramMgmt from "./ProgramMgmt";
import FeedbackTrack from "./FeedbackTrack";
import AlumniTrack from "./AlumniTrack";

function AdminHome(){
    return(
        <div>
            <center>
                <br />
                <h1 style={{backgroundColor:"green", color:"white"}}>Admin Home Page</h1>
                <br />
            <Router>
                <Link to="departmentmgmt">Department</Link>
                <span>   </span>
                <Link to="programmgmt">Program</Link>
                <br />
                <Link to="feedbacktrack">Feedback</Link>
                <span>   </span>
                <Link to="alumnitrack">Alumni</Link>

                <Routes>
                    <Route path="departmentmgmt" element={<DepartmentMgmt />} />
                    <Route path="programmgmt" element={<ProgramMgmt />} />
                    <Route path="feedbacktrack" element={<FeedbackTrack />} />
                    <Route path="alumnitrack" element={<AlumniTrack />} />
                </Routes>
            </Router>
                
                {/* <DepartmentMgmt />
                <br />
                <ProgramMgmt />
                <br />
                <FeedbackTrack />
                <br />
                <AlumniTrack />
                <br />
                <Outlet /> */}
            </center>
        </div>
    );
} export default AdminHome;
