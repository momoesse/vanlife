import React from "react";
import { useLoaderData } from "react-router-dom";

export function loader( {request} ) {
    return new URL(request.url).searchParams.get("message");
}

export default function Login() {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const message = useLoaderData();

    function handleSubmit(event) {

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
            <form onSubmit={handleSubmit} className="login--form">
                <label>Enter your email address:
                    <input name="email" value={loginData.email} type="email" onChange={handleChange} />
                </label>
                <label>Enter your password:
                    <input name="password" value={loginData.password} type="password" onChange={handleChange} />
                </label>
                <button>Log in</button>
            </form>
        </div>
    )
}