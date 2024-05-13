import React from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Vans() {
    const [allVans, setAllVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setAllVans(data.vans))
    }, [])

    const [searchParams, setSearchParams] = useSearchParams();

    const uniqueTypes = [...new Set(allVans.map((el) => el.type))];
    const filterBar = uniqueTypes.map(el => 
        <Link to={`?type=${el}`}><span className="badge">{el}</span></Link>
    )

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

    const displayedVans = typeFilter ? 
        allVans.filter( el => el.type === typeFilter) : allVans;

    const elementsToDisplay = displayedVans.map(el =>
        <Link to={`/vans/${el.id}`} aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
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
        <div>
            <h2>Explore our van options</h2>
            <div>
                {filterBar}
                <Link to=".">Clear filters</Link>
            </div>
            <div className="vans--container">
                {elementsToDisplay}
            </div>
        </div>
    )
}