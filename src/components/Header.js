import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "../images/van--icon.png";

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <nav className="nav--container">
                <Link to="/">#VANLIFE</Link>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/host">Host</NavLink>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/about">About</NavLink>
                <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="/vans">Vans</NavLink>
                <Link to="/login" className="login--link">
                    <img src={imageUrl} />
                </Link>
            </nav>
        </header>
    )
}