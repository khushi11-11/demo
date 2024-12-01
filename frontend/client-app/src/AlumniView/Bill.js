// npm install razorpay --save :- library provides payment gateway
// payment gateway is used to implement online payment functionality

import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./davvLogo.jpeg";

function Bill(props){
    const[mydate, setMyDate]=useState();
    const[aaddress, setAAddress]=useState();
    const[acontact, setAContact]=useState();
    // const[alumniitem, setAlumniItem]=useState([]);
    const[aid, setAid]=useState(); 
    const[alumniname, setAlumniName]=useState();

    var total = 0;
    var nextbillid = "";

    useEffect(() => {
        axios.get('http://localhost:7777/alumni/getalumnidetails/' + props.data.aid).then((res) => {
            setAlumniName(res.data.AlumniName);
            setAAddress(res.data.AAddress);
            setAContact(res.data.AContact);
            mydateFunc(); // Updated function call
        }).catch((err) => {
            alert(err);
        });
    }, []);
    

    function mydateFunc(){
        const date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        console.log(currentDate);
        setMyDate(currentDate);
    }

    function loadScript(src){
        return new Promise( (resolve)=>{
            const script = document.createElement("script");
            script.src = src;
            script.onload=()=>{
                resolve(true);
            };
            script.onerror=()=>{
                resolve(false);
            };
            document.body.appendChild(script);
        });
    } // samajh ni aaya

    function SaveBill(){
        // alert(sitem.length);
        // var nextbillid = "";
        axios.get('http://localhost:7777/bill/getbillid/').then( (res)=>{
            nextbillid = parseInt(res.data[0].billid) + 1;
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let currentDate = `${day}-${month}-${year}`;
            // alert(currentDate);

            // console.log(sitem);
            var billobj = {
                billid: nextbillid,
                billdate: currentDate,
                aid: props.data.aid
            };
            
            axios.post('http://localhost:7777/bill/billsave', billobj)
            .then((res) => {
            // alert(res.data);
                alert(JSON.stringify(res.data, null, 2));
            }).catch((err) => {
                alert("inner " + err);
            });
        }).catch( (err)=>{
            alert("outer " + err);
        });
    }

    async function displayRazorpay() {
        SaveBill();
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if(!res){
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // var myamount = total*100;
        // alert(total);


        //new membership
        const result = await axios.post('http://localhost:7777/payment/membership/' + amount);

        if(!res){
            alert("Server error. Are you online?");
            return;
        }

        //getting the membership/payment details back
        const{ amount, id : mship_id, currency } = result.data;
        const options = {
            key : "rzp_test_8CxHBNuMQt1Qn8", //enter the key id generated from the dashboard
            amount : 500,
            currency : currency,
            name : "Devi Ahilya University Alumni Association (DUAA), Indore",
            description : "Test Transaction",
            image : { logo },
            aid : aid,
            
            // orderCreationId - membershipId, order_id - mship_id
            handler : async function (response) {
                const data = {
                    membershipId : mship_id,
                    razorpayPaymentId : response.razorpay_payment_id,
                    razorpayOrderId : response.razorpay_order_id,
                    razorpaySignature : response.razorpay_signature
                };
                // alert(data.razorpayPaymentId);
                alert(JSON.stringify(data, null, 2)); // Stringify the data object
                const result = await axios.post('http://localhost:7777/payment/success', data);

                alert(result.data);
                //save payment details
                const paydetlobjdata = {
                    membershipId : mship_id,
                    razorpayPaymentId : response.razorpay_payment_id,
                    razorpayOrderId : response.razorpay_order_id,
                    razorpaySignature : response.razorpay_signature,
                    aid : props.data.aid,
                    billid : nextbillid,
                    amount : amount
                };

                axios.post('http://localhost:7777/paymentdetails/paymentdetailsave', paydetlobjdata).then( (res)=>{
                    alert(res.data);
                }).catch( (err)=>{
                    alert(err);
                });
            } , prefill : {
                name : "DAVV Alumni Association",
                email : "duaa@gmail.com",
                contact : "9999999999"
            } , notes : {
                address : "Devi Ahilyabai Vishwa Vidyalay, Takshila Parisar (Indore)"
            } , theme : {
                color : '#61dafb'
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return(
        <div>
            <center>
                <table>
                    <tr>
                        <td>Alumni ID</td>
                        <td>{props.data.aid}</td>
                    </tr>
                    <tr>
                        <td>Alumni Name</td>
                        <td>{alumniname}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{aaddress}</td>
                    </tr>
                    <tr>
                        <td>Contact</td>
                        <td>{acontact}</td>
                    </tr>
                    <tr>
                        <td> Membership Joining Date</td>
                        <td>{mydate}</td>
                    </tr>
                </table>
                <h4 style={{backgroundColor:"green"}}>Bill</h4>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Alumni Name</th>
                        <th>Membership</th>
                        <th>Photo</th>
                    </tr>
                    {
                        props.data.alumni.map( (item)=>(
                            <tr>
                                <td>{item.aid}</td>
                                <td>{item.alumniname}</td>
                                <td>Premium</td>
                                <img src={"http://localhost:7777/alumni/getimage/" + item.apicname} height={50} width={50} />
                            </tr>
                        ))
                    }
                </table>
                {/* {
                    props.data.selitems.map((item)=>{
                        total=total+item.oprice;
                    })
                } */}
                <h4 style={{backgroundColor:"green"}}>Total Amount = 500</h4>
                <button type="submit" onClick={displayRazorpay}>Pay Now</button>
            </center>
        </div>
    );
} export default Bill;