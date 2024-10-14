import { api } from "../repositories/api"


export async function login(email: string) {
    const data = await api

    if (data.email !==  email) {
        return alert('Email inválido!')
    }

    alert(`Seja bem vindo(a) ${email}!`)
}