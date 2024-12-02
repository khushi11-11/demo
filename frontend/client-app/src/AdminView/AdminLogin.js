

import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AdminLogin() {
    const [uid, setUId] = useState("");
    const [upass, setUPass] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleUIdText = (evt) => setUId(evt.target.value);
    const handleUPassText = (evt) => setUPass(evt.target.value);

    const handleLoginButton = () => {
        if (uid === "admin" && upass === "abc@123") {
            navigate("adminhome"); // Navigate to "adminhome" relative to "adminlogin"
        } else {
            alert("INVALID ID OR PASSWORD!");
        }
    };

    return (
        <div>
            <center>
                <h4>Administrator Login</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>User ID</td>
                            <td><input type="text" onChange={handleUIdText} /></td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td><input type="password" onChange={handleUPassText} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="button" onClick={handleLoginButton}>Login</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Outlet />
            </center>
        </div>
    );
}

export default AdminLogin;
