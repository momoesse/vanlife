import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

    React.useEffect(() => {
        localStorage.setItem("vans", JSON.stringify(hostVans));
    }, [hostVans])

    console.log(hostVans);

    const elementToDisplay = hostVans.map(el => {
        return (
            <Link to={`./${el.id}`} aria-label={`View details for ${el.name}, priced at ${el.price} per day`}>
                <div key={el.id} className="host-van--container">
                    <img src={el.imageUrl} />
                    <div>
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
            {hostVans ? elementToDisplay : <h3>Loading data....</h3>}
        </div>

    )
}