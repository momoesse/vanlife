import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Host() {
    return (
        <div>
            <nav className="nav--host">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/views">Views</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    )
}