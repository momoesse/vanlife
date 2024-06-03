import React from "react";
import { useLoaderData } from "react-router-dom";
import { loginUser } from "../api.js";

export function loader( {request} ) {
    return new URL(request.url).searchParams.get("message");
}

export default function Login() {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const [loginStatus, setLoginStatus] = React.useState("idle");
    const [loginError, setLoginError] = React.useState(null);

    const message = useLoaderData();

    function handleSubmit(event) {
        event.preventDefault();
        setLoginStatus("submitting");
        setLoginError(null);
        loginUser(loginData)
            .then(data =>  console.log(data))
            .catch(error => setLoginError(error))
            .finally( () => setLoginStatus("idle"))
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData(prevState => ({
            ...prevState, [name] : value
        }))
    }

    return (
        <div className="login--container">
            <h2>Sign in to your account</h2>
            { message && <h3 className="red">{message}</h3>} 
            { loginError && <h3 className="red">{loginError.message}</h3>}
            <form onSubmit={handleSubmit} className="login--form">
                <label>Enter your email address:
                    <input name="email" value={loginData.email} type="email" onChange={handleChange} />
                </label>
                <label>Enter your password:
                    <input name="password" value={loginData.password} type="password" onChange={handleChange} />
                </label>
                <button disabled={loginStatus === "submitting"}>{loginStatus === "submitting" ? "Logging in..." : "Log in"}</button>
            </form>
        </div>
    )
}