import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext();

    return (
        <section className="host--van--photos">
            <img src={currentVan[0].imageUrl}/>
        </section>
    )
}