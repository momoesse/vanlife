import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    return (
        <pre>An error has occured: {error.message}</pre>
    )
}