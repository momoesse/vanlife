import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { getVans } from "../../api.js";

export default function Vans() {
    const [allVans, setAllVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans();
                setAllVans(data);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }   
        }
        loadVans()
    }, [])

    const [searchParams, setSearchParams] = useSearchParams();

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

    const typeFilter = searchParams.get("type");
    console.log(typeFilter);

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

    if (loading) {
        return <h2 aria-live="polite">Loading...</h2>
    }

    if (error) {
        return <h2 aria-live="assertive">An error occured: {error.message}</h2>
    }

    return (
        <div>
            <h2>Explore our van options</h2>
            <div className="filter-bar--vans">
                {filterBar}
                {typeFilter && <button onClick={() => handleFilterChange("type", null)}>Clear filters</button>}
            </div>
            <div className="vans--container">
                {elementsToDisplay}
            </div>
        </div>
    )
}