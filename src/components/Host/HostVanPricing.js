import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const { currentVan } = useOutletContext();

    return (
        <section>
            <p>€{currentVan[0].price}/day</p>
        </section>
    )
}