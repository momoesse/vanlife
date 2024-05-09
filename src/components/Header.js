import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="nav--container">
                <ul>
                    <li><Link to="/">#VANLIFE</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/vans">Vans</Link></li>
                </ul>
            </nav>
        </header>
    )
}