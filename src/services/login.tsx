import { api } from "../repositories/api"


export async function login(email: string, password: string) {

    const data = await api

    if (data.email !==  email || password !== data.password) {
        return { loggedIn: false, user: '' }
    }

    return { user: data.name, loggedIn: true }
}