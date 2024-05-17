import React from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api.js";

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function loadHostVans() {
            setLoading(true);
            try {
                const data = await getHostVans();
                setHostVans(data);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }  
        }
        loadHostVans();
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

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>An error occured: {error.message}</h2>
    }

    return (
        <div>
            <h2>Your listed vans</h2>
            {hostVans ? elementToDisplay : <h3>Loading data....</h3>}
        </div>

    )
}