import React, { Suspense } from "react";
import { useSearchParams, useLoaderData, Link, defer, Await } from "react-router-dom";
import { getVans } from "../../api.js";

export function loader() {
    return defer({ vans: getVans() });
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const promiseData = useLoaderData();
    const typeFilter = searchParams.get("type");

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        })
    }

    function renderVans(allVans) {
        const uniqueTypes = [...new Set(allVans.map((el) => el.type))];
        const filterBar = uniqueTypes.map(el =>
            // <button onClick={ () => setSearchParams(`?type=${el}`)}>{el}</button>
            <button onClick={() => handleFilterChange(`type`, `${el}`)}>{el}</button>
        )

        const displayedVans = typeFilter ?
            allVans.filter(el => el.type === typeFilter) : allVans;

        const elementsToDisplay = displayedVans.map(el =>
            <Link to={`./${el.id}`} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
                aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
                <div key={el.id} className="van--container">
                    <img src={el.imageUrl} alt={`Image of ${el.name}`} />
                    <div>
                        <h3>{el.name}</h3>
                        <p>€{el.price}<span>/day</span></p>
                        <i className="van--type"><span className="badge">{el.type}</span></i>
                    </div>
                </div>
            </Link>
        )

        return (
            <>
                <div className="filter-bar--vans">
                    {filterBar}
                    {typeFilter && <button onClick={() => handleFilterChange("type", null)}>Clear filters</button>}
                </div>
                <div className="vans--container">
                    {elementsToDisplay}
                </div>
            </>
        )
    }

    return (
        <div>
            <h2>Explore our van options</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={promiseData.vans}>
                    {renderVans}
                </Await>
            </Suspense>
        </div >
    )
}