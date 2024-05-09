import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="nav--container">
                <Link to="/">#VANLIFE</Link>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}