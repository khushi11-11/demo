import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

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
        <div className="admin-login-form">
            <h1>Administrator Login</h1>
            <table>
                <tbody>
                    <tr>
                        <td>User ID</td>
                        <td className="input"><input type="text" onChange={handleUIdText} /></td>
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
        </div>
    );
}

export default AdminLogin;
