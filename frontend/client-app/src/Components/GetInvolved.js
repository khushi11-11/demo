import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Bill from "../AlumniView/Bill";
import "./GetInvolved.css"
function GetInvolved(props) {
    <Header />
    // {isLoggedIn && <AdminHome />} {/* Render AdminHome if logged in */}
    //             <nav>
    //                 <Outlet />
    //             </nav>
    const handleJoinButton = () => {

        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // var obj = {
        //     Aid : aid
        // }
        // root.render(<Bill data={obj}></Bill>)
    }
    return (
        <div className="getinvolved">
            <h3>GET INVOLVED</h3>
            <p> Premium Membership </p>
            <button type="submit" onClick={handleJoinButton}>Join</button>
        </div>
    )
} export default GetInvolved;