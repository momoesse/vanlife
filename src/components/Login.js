import React from "react";
import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api.js";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        const data = await loginUser({ email, password });
        localStorage.setItem("loggedIn", true);
        const response = redirect("/host")
        // workaround for redirect issues when working with MirageJS and React Router 
        response.body = true
        return response
    } catch (error) {
        return null
    }
}

export default function Login() {
    const errorMessage = useActionData();
    const navigation = useNavigation();
    const message = useLoaderData();

    return (
        <div className="login--container">
            <h2>Sign in to your account</h2>
            {message && <h3 className="red">{message}</h3>}
            {errorMessage?.email && <h3 className="red">{errorMessage?.email}</h3>}
            <Form method="post" className="login--form" replace>
                <label>Enter your email address:
                    <input name="email" type="email" />
                </label>
                <label>Enter your password:
                    <input name="password" type="password" />
                </label>
                <button disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in" : "Log in"}</button>
            </Form>
        </div>
    )
}