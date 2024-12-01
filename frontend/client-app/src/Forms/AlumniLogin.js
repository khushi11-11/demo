import axios from "axios";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import Bill from "../AlumniView/Bill";
import MainPage from "../Components/MainPage";
import GetInvolved from "../Components/GetInvolved";

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
            // if (res.data.AlumniId !== undefined) {
                if (res.data && res.data.Aid) {
            // obj ka rhs
                // Cookies handling
                if (ischecked) {
                    const alumniData = {
                        ID: aid,
                        Passwd: apass
                    };
                    // const expirationTime = new Date(new Date().getTime() + 60000000);
                    // Cookies.set('aauth', JSON.stringify(alumniData), { expires: expirationTime });
                }

                // Session handling 
                // const alumniSessionData = {
                //     alumniname: res.data.AlumniName
                // };
                // sessionStorage.setItem('asessionauth', JSON.stringify(alumniSessionData));


                // Render Bill
                const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
                const alumniData = {
                    alumniname: res.data.AlumniName,
                    apicname: res.data.APicName,
                    aid: res.data.Aid
                };
                // alert(alumniData.aid);
                root.render(<GetInvolved data={alumniData} />);
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
            </center>
        </div>
    );
} export default AlumniLogin;


