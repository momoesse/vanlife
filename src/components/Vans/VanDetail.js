import React, { Suspense } from "react";
import { useParams, Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import { getVan } from "../../firebase.js";

export function loader({ params }) {
    return defer({ vanDetails: getVan(params.id) });
}

export default function VanDetail() {
    const params = useParams();
    const location = useLocation();
    const search = location.state?.search || "";
    const type = location.state?.type || "all";

    const promiseData = useLoaderData();

    function renderVanDetails(vanDetails) {
        return (
            <>
                <Link to={`..${search}`} relative="path" className="back--button">&larr; Back to {type} vans</Link>
                <div key={vanDetails.id} className="van--container">
                    <img src={vanDetails.imageUrl} alt={`Image of ${vanDetails.name}`} />
                    <div>
                        <h3>{vanDetails.name}</h3>
                        <p>€{vanDetails.price}<span>/day</span></p>
                        <p>{vanDetails.description}</p>
                        <button>Rent this van</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={promiseData.vanDetails}>
                {renderVanDetails}
            </Await>
        </Suspense>
    )
}