import React from "react";
import { NavLink } from "react-router-dom";

function NavRoute() {
    return (
        <div>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
            >
                Home
            </NavLink>
        </div>
    );
}

export default NavRoute;
