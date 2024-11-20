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

                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/statemgmt">State</Link>
                        </li>
                        <li>
                            <Link to="/citymgmt">City</Link>
                        </li>
                        <li>
                            <Link to="/productcatgmgmt">Product Category</Link>
                        </li>
                        <li>
                            <Link to="/vendormgmt">Vendor Management</Link>
                        </li>
                        <li>
                            <Link to="/product">Product Management</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/statemgmt" element={<StateMgmt />}></Route>
                    <Route path="/citymgmt" element={<CityMgmt />}></Route>
                    <Route path="/productcatgmgmt" element={<ProductCatgMgmt />}></Route>
                    <Route path="/vendormgmt" element={<VendorMgmt />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                </Routes> */}
                <Outlet /> 
            </center>
        </div>
    );
} export default AdminHome;