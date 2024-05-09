import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}