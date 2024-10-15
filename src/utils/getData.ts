import { api } from "../repositories/api"

export const getData = async () => {
    return api.then(data => {
        return data
    })
}