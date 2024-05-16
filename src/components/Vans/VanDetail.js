import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
    const params = useParams();
    const location = useLocation();
    const search = location.state?.search || "";
    console.log("This is the id of the selected van" + params.id);

    const [vanDetails, setVanDetails] = React.useState();
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetails(data.vans))
    }, [params.id])

    console.log(vanDetails);

    return ( 
        <div>
            <Link to={`..${search}`} relative="path" className="back--button">&larr; Back to all vans</Link>
            {vanDetails ? (
                <div key={vanDetails.id} className="van--container">
                    <img src={vanDetails.imageUrl} alt={`Image of ${vanDetails.name}`} />
                    <div>
                        <h3>{vanDetails.name}</h3>
                        <p>€{vanDetails.price}<span>/day</span></p>
                        <p>{vanDetails.description}</p>
                        <button>Rent this van</button>
                    </div>
                </div>
            ) : <h3>Loading data....</h3>
            }
        </div>
    )
}