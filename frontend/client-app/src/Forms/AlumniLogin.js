import axios from "axios";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client"; 
import Bill from "../AlumniView/Bill";
// import MainPage from "../Components/MainPage";
import GetInvolved from "../Components/GetInvolved";
import AlumniRegister from "./AlumniRegister";
// import Home from "../Components/Home";
import MainPage_trial from "../Components/MainPage_trial";

function AlumniLogin() {
    const [aid, setAId] = useState("");
    const [apass, setAPass] = useState("");
    const [ischecked, setIsChecked] = useState(false);

    const handleAId = (evt) => {
        setAId(evt.target.value);
    };
    const handleAPass = (evt) => {
        setAPass(evt.target.value);
    };

    useEffect(() => {
        const mycookies = Cookies.get('aauth');
        if (mycookies !== undefined) {
            const obj = JSON.parse(mycookies);
            setAId(obj.aid);
            setAPass(obj.password);
        }
    }, []);

    const handleLoginBtn = () => {
        const obj = {
            AlumniId: aid,
            AlumniPass: apass
        };
        axios.post('http://localhost:7777/alumni/login', obj).then((res) => {
            if (res.data && res.data.Aid) {
            // obj ka rhs
                // Cookies handling
                if (ischecked) {
                    const alumniData = {
                        ID: aid,
                        Passwd: apass
                    };
                }


                // Render Bill
                const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
                const alumniData = {
                    alumniname: res.data.AlumniName,
                    apicname: res.data.APicName,
                    aid: res.data.Aid
                };
                // alert(alumniData.aid);
                root.render(<MainPage_trial data={alumniData} />);
            } else {
                alert("Invalid Alumni ID or Password");
            }
        });
    };

    const handleRemember = () => {
        setIsChecked(!ischecked);
    };

    return (
        <div>
            <center>
                <h3>Alumni Login</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Alumni Id: </td>
                            <td><input type="text" onChange={handleAId} value={aid} /></td>
                        </tr>
                        <tr>
                            <td>Password: </td>
                            <td><input type="password" onChange={handleAPass} value={apass} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit" onClick={handleLoginBtn}>Login</button></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="checkbox" onChange={handleRemember} checked={ischecked}/><span>Remember Me</span></td>
                        </tr>
                    </tbody>
                </table>
                {/* <hr style={{width: '60%',height: '2px',border: 'none',backgroundColor: '#D9D9D9',margin: '20px auto',}} />

                <p>Haven't registered yet? Register today here!<span> </span>
                    <button type="submit" onClick={()=>AlumniRegister(true)}>Register</button>
                    {AlumniRegister && <AlumniRegister />}
                </p> */}
            </center>
        </div>
    );
} export default AlumniLogin;

