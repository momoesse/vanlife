import React from "react";
import { useParams, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api.js";
import { requireAuth } from "../../utils.js";

export async function loader({ params, request }) {
    await requireAuth(request);
    return getHostVans(params.id);
}

export default function HostVanDetail() {
    const currentVan = useLoaderData();

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
            <Link to=".." relative="path" className="back--button">&larr; Back to all vans</Link>
            <div>
                <div key={currentVan[0].id} className="host-van--container">
                    <img src={currentVan[0].imageUrl} />
                    <div>
                        <p><span className="badge">{currentVan[0].type}</span></p>
                        <p>{currentVan[0].name}</p>
                        <p>€{currentVan[0].price}/day</p>
                    </div>
                </div>
                <nav className="nav--host">
                    <NavLink end style={({ isActive }) => isActive ? activeStyle : null} to=".">Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="photos">Photos</NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </div>
    )
}