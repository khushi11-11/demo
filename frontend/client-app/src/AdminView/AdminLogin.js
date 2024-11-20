import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AdminHome from "./AdminHome";

function AdminLogin() {
    const [uid, setUId] = useState("");
    const [upass, setUPass] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

    const handleUIdText = (evt) => {
        setUId(evt.target.value);
    }

    const handleUPassText = (evt) => {
        setUPass(evt.target.value);
    }

    const handleLoginButton = () => {
        if (uid === "admin" && upass === "abc@123") {
            setIsLoggedIn(true); // Set login status to true
        } else {
            alert("INVALID ID OR PASSWORD !");
        }
    }

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
                            <td><button type="button" onClick={handleLoginButton}>Login</button></td>
                        </tr>
                    </tbody>
                </table>
                {isLoggedIn && <AdminHome />} {/* Render AdminHome if logged in */}
                <nav>
                    <Outlet />
                </nav>
            </center>
        </div>
    );
}

export default AdminLogin;