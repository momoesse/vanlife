import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
    const [allVans, setAllVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setAllVans(data.vans))
    }, [])

    console.log(allVans);

    const elementsToDisplay = allVans.map(el =>
        <Link to={`/vans/${el.id}`} aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
            <div key={el.id} className="van--container">
                <img src={el.imageUrl} alt={`Image of ${el.name}`} />
                <div>
                    <h3>{el.name}</h3>
                    <p>€{el.price}<span>/day</span></p>
                    <i className="van--type">{el.type}</i>
                </div>
            </div>
        </Link>

    )

    return (
        <div>
            <h2>Explore our van options</h2>
            <div className="vans--container">
                {elementsToDisplay}
            </div>
        </div>
    )
}