import React, { Suspense } from "react";
import { useParams, Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { getVan } from "../../firebase.js";
import { requireAuth } from "../../utils.js";

export async function loader({ params, request }) {
    await requireAuth(request);
    return defer({ currentVan: getVan(params.id) });
}

export default function HostVanDetail() {
    const promiseData = useLoaderData();

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderCurrentVan(currentVan) {
        return (
            <div>
                <Link to=".." relative="path" className="back--button">&larr; Back to all vans</Link>
                <div>
                    <div key={currentVan.id} className="host-van--container">
                        <img src={currentVan.imageUrl} />
                        <div className="host-van--info">
                            <p><span className="badge">{currentVan.type}</span></p>
                            <p>{currentVan.name}</p>
                            <p>€{currentVan.price}/day</p>
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

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={promiseData.currentVan}>
                {renderCurrentVan}
            </Await>
        </Suspense>
    )
}