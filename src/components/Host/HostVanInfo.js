import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const { currentVan } = useOutletContext();

    return (
        <section className="host--van--info">
            <p>Name: <span>{currentVan[0].name}</span></p>
            <p>Type: <span>{currentVan[0].type}</span></p>
            <p>Description: <span>{currentVan[0].description}</span></p>
        </section>
    )
}