import React from "react";
import { useParams, Link } from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams();
    const allVans = JSON.parse(localStorage.getItem("vans"));

    const [currentVan, setCurrentVan] = React.useState(null);
    React.useEffect(() => {
        console.log("inside effect" + allVans)
        const selectedVan = allVans.filter(el => el.id === id);
        setCurrentVan(selectedVan)
    }, [id])

    return (
        <div>
            <Link to="../vans" className="back--button">&larr; Back to all vans</Link>
            {currentVan ?
                <div key={currentVan[0].id} className="host-van--container">
                    <img src={currentVan[0].imageUrl} />
                    <div>
                        <p><span className="badge">{currentVan[0].type}</span></p>
                        <p>{currentVan[0].name}</p>
                        <p>€{currentVan[0].price}/day</p>
                    </div>
                </div>
                : <h3>Loading data....</h3>}
        </div>
    )
}