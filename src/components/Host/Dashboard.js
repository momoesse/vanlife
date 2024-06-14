import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getHostVans } from "../../firebase.js";
import { requireAuth } from "../../utils.js";

export async function loader({ request }) {
    await requireAuth(request);
    return defer({ vans: getHostVans() });
}

export default function Dashboard() {
    const promiseData = useLoaderData();

    function renderHostVans(hostVans) {
        const elementToDisplay = hostVans.map(el => {
            return (
                <Link to={`vans/${el.id}`} aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
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
        <>
            <section className="dashboard earnings">
                <div>
                    <h2>Welcome</h2>
                    <h3>Income</h3>
                </div>
                <Link to="income">Details</Link>
            </section>
            <section className="dashboard reviews">
                <div>
                    <h3>Review score</h3>
                    <FaStar />
                </div>
                <Link to="reviews">Details</Link>
            </section>
            <section className="dashboard vans">
                <div>
                    <h3>Your listed vans</h3>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Await resolve={promiseData.vans}>
                            {renderHostVans}
                        </Await>
                    </Suspense>
                </div>
                <Link to="vans">View all</Link>
            </section>
        </>
    )
}