import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Host() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div>
            <nav className="nav--host">
                <NavLink end style={ ({isActive}) => isActive ? activeStyle : null} to="/host">Dashboard</NavLink>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/host/income">Income</NavLink>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/host/views">Views</NavLink>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}