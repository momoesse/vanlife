import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const path = new URL(request.url).pathname;
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first&redirectTo=${path}`)
        response.body = true
        throw response
    }
    return null
}