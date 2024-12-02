import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../Components/Header";
import HomeSection from "../Components/HomeSection";

function AlumniRegister(props){
    const[ausername, setAUserName]=useState(); // done 
    const[aemail, setAEmail]=useState(); // done
    const[auserpass, setAUserPass]=useState(); // done
    const[alumniname, setAlumniName]=useState(); // done
    const[adept, setADept]=useState(""); // partially done
    const[aprg, setAPrg]=useState(""); // partially done

    const[deptlist, setDeptList]=useState([]); // dept mgmt
    const[prglist, setPrgList]=useState([]); // prg mgmt
    
    const[admyear, setAdmYear]=useState(""); // partially done
    const[gradyear, setGradYear]=useState(""); // partially done
    const yearOptions = Array.from({ length: 2024 - 1985 + 1 }, (_, index) => 1985 + index);

    const[address, setAddress]=useState(); // done
    const[acontact, setAContact]=useState(); // done
    const[image, setImage] = useState({ preview: '', data: '' });
    const[apicname, setAPicName]=useState();
    const[status, setStatus] = useState('');
    const[aid, setAId]=useState(0); // done
    const[alist, setAList]=useState([]);

    const handleAUserName=(evt)=>{
        setAUserName(evt.target.value);
    }
    const handleAEmail=(evt)=>{
        setAEmail(evt.target.value);
    }
    const handleAUserPass=(evt)=>{
        setAUserPass(evt.target.value);
    }
    const handleAlumniName=(evt)=>{
        setAlumniName(evt.target.value);
    }
    const handleAdmYear=(evt)=>{
        const ayear = evt.target.value.slice(0, 4);
        setAdmYear(ayear);
    }
    const handleGradYear=(evt)=>{
        // Extract the year using string slicing
        const gyear = evt.target.value.slice(0, 4);
        setGradYear(gyear);
    }
    const handleAddress=(evt)=>{
        setAddress(evt.target.value);
    }
    const handleAContact=(evt)=>{
        setAContact(evt.target.value);
    }
    const handleADeptSelect=(evt)=>{
        setADept(evt.target.value);

        // department k according program list display krne k liye
        axios.get('http://localhost:7777/program/getprogrambydeptid/' + evt.target.value).then((res)=>{
            setPrgList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
    const handleAPrgSelect=(evt)=>{
        setAPrg(evt.target.value);
    }
    useEffect(() => {
        // Fetch department list on component mount
        axios.get('http://localhost:7777/department/show')
            .then((res) => {
                setDeptList(res.data);
            })
            .catch((err) => {
                console.error("Error fetching department list:", err);
                alert("Failed to load department list.");
            });
    }, []);

    // for aid (Alumni ID)
    useEffect(() => {
        axios.get('http://localhost:7777/alumni/getalumnicount/').then( (res)=>{
            setAId(res.data.length+1);
        }).catch((err)=>{
            alert(err);
        });
    }, [])

    //browse and save image code
    const handleImgSubmit = async(evt) =>{
        evt.preventDefault();
        let formData = new FormData();
        formData.append('file', image.data);
        const response = await fetch('http://localhost:7777/alumni/savealumniimage', {
            method : 'POST',
            body : formData
        });
        if(response){
            if(response.ok){
                alert("File Uploaded Successfully !!");
                setStatus("File Uploaded Successfully !!");
            } else{
                setStatus("Failed to Upload File..");
            }
        }
    }
 
    const handleFileChange=(evt)=>{
        const img = {
            preview : URL.createObjectURL(evt.target.files[0]),
            data : evt.target.files[0]
        };
        setImage(img);
        setAPicName(evt.target.files[0].name);
    }

    const handleRegisterButton=async()=>{
        var obj = {
            AUserName : ausername,
            AEmail : aemail,
            AUserPass : auserpass,
            AlumniName : alumniname,
            ADepartment : adept,
            AProgram : aprg,
            AAdmissionYear : admyear.slice(0, 4),
            AGraduationYear : gradyear.slice(0, 4),
            AAddress : address,
            AContact : acontact,
            APicName : apicname,
            Aid : aid
        }
        
        axios.post('http://localhost:7777/alumni/register/', obj).then( (res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }

    return(
        <div><center>
            {/* <Header /> */}
            {/* <HomeSection> */}
            <h1>Alumni Registration</h1>
            <br />
            <table>
                <tr>
                    <td>Alumni ID </td>
                    <td>{aid}</td>
                </tr>
                <tr>
                    <td>Email ID : </td>
                    <td><input type="text" onChange={handleAEmail} value={aemail}/></td>
                </tr>
                <tr>
                    <td>Username : </td>
                    <td><input type="text" onChange={handleAUserName} value={ausername}/></td>
                </tr>
                <tr>
                    <td>Full name : </td>
                    <td><input type="text" onChange={handleAlumniName} value={alumniname}/></td>
                </tr>
                <tr>
                    <td>Password : </td>
                    <td><input type="password" onChange={handleAUserPass} value={auserpass}/></td>
                </tr>
                <tr>
                    <td>Department : </td>
                    <td>
                    <select onChange={handleADeptSelect}>
                            <option value="" disabled selected>
                                Select Department
                            </option>
                            {deptlist.map((item) => (
                                <option key={item.deptid} value={item.deptid}>
                                    {item.deptname}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Program : </td>
                    <td>
                        <select onChange={handleAPrgSelect}>
                            <option value="" disabled selected>
                                Select Program
                            </option>
                            {prglist.map((items) => (
                                <option key={items.prgid} value={items.prgid}>
                                    {items.prgname}
                                </option>
                                ))}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Admission Year : </td>
                    <td>
                    <select id="graduationYear" value={admyear} onChange={handleAdmYear}>
                        <option value="" disabled>
                            Select
                        </option>
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Graduation Year : </td>
                    <td>
                    <select id="graduationYear" value={gradyear} onChange={handleGradYear}>
                        <option value="" disabled>
                            Select
                        </option>
                            {yearOptions.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td><input type="text" onChange={handleAddress} /></td>
                </tr>
                <tr>
                    <td>Contact: </td>
                    <td><input type="number" maxLength={10} minLength={10} onChange={handleAContact} /></td>
                </tr>
                <tr>
                    <td>Select Your Recent Photo: </td>
                    <td>
                        <input type="file" onChange={handleFileChange} name="file" />
                        {
                            image.preview && <img src={image.preview} alt="Preview" width={100} height={100} />
                        }
                    </td>
                </tr>
                <tr>
                    <td>Click to upload photo</td>
                    <td>
                        <button type="submit" onClick={handleImgSubmit} >Upload</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                       <button type="submit" onClick={handleRegisterButton} >Register</button>
                    </td>
                </tr>
            </table>
            {/* </HomeSection> */}

            </center>
            </div>
    )
} export default AlumniRegister;