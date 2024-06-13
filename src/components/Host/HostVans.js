import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api.js";
import { requireAuth } from "../../utils.js";

export async function loader( {request} ) {
    await requireAuth(request);
    return getHostVans();
}

export default function HostVans() {
    const hostVans = useLoaderData();

    console.log(hostVans);

    const elementToDisplay = hostVans.map(el => {
        return (
            <Link to={`./${el.id}`} aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
                <div key={el.id} className="host-van--container">
                    <img src={el.imageUrl} />
                    <div className="host-van--info">
                        <p>{el.name}</p>
                        <p>€{el.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h2>Your listed vans</h2>
            {elementToDisplay}
        </div>
    )
}