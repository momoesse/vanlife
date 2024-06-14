import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../firebase.js";
import { requireAuth } from "../../utils.js";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ vans: getHostVans() });
}

export default function HostVans() {
    const promiseData = useLoaderData();

    function renderHostVans(hostVans) {
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
            <>
                {elementToDisplay}
            </>
        )
    }

    return (
        <div>
            <h2>Your listed vans</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={promiseData.vans}>
                    {renderHostVans}
                </Await>
            </Suspense>
        </div>
    )
}