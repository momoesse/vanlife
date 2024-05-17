export async function getVans() {
    const res = await fetch("/api/vans");
    if (!res.ok) {
        throw {
            message: "Failed to fetch Vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans
}

export async function getHostVans() {
    const res = await fetch("/api/host/vans");
    if (!res.ok) {
        throw {
            message: "Failed to fetch Host Vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json();
    return data.vans
}