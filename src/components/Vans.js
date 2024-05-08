import React from "react";

export default function Vans() {
    const [allVans, setAllVans] = React.useState([]);

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setAllVans(data.vans))
    }, [])

    console.log(allVans);

    const elementsToDisplay = allVans.map(el =>
        <div key={el.id} className="van--container">
            <img src={el.imageUrl} />
            <div>
                <h3>{el.name}</h3>
                <p>€{el.price}<span>/day</span></p>
                <i className="van--type">{el.type}</i>
            </div>
        </div>
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