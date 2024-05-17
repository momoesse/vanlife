import React from "react";
import { useParams, Link, NavLink, Outlet} from "react-router-dom";

export default function HostVanDetail() {
    const { id } = useParams();
    const allVans = JSON.parse(localStorage.getItem("vans"));

    const [currentVan, setCurrentVan] = React.useState(null);
    React.useEffect(() => {
        console.log("inside effect" + allVans)
        const selectedVan = allVans.filter(el => el.id === id);
        setCurrentVan(selectedVan)
    }, [id])

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div>
            <Link to=".." relative="path" className="back--button">&larr; Back to all vans</Link>
            {currentVan ?
                <div>
                    <div key={currentVan[0].id} className="host-van--container">
                        <img src={currentVan[0].imageUrl} />
                        <div className="host-van--info">
                            <p><span className="badge">{currentVan[0].type}</span></p>
                            <p>{currentVan[0].name}</p>
                            <p>€{currentVan[0].price}/day</p>
                        </div>
                    </div>
                    <nav className="nav--host">
                        <NavLink end style={ ({isActive}) => isActive ? activeStyle : null} to=".">Details</NavLink>
                        <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="pricing">Pricing</NavLink>
                        <NavLink style={ ({isActive}) => isActive ? activeStyle : null} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={{ currentVan }} />
                </div>
                : <h3>Loading data....</h3>}
        </div>
    )
}