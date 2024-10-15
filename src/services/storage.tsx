interface IDioBank {
    user: string
    login: boolean
}

const defaultKey = 'diobank'

export const getAllLocalStorage = (): Storage => {
    return localStorage
}

export const createLocalStorage = (): void => {
    const defaultDioBank: IDioBank = {
        user: '',
        login: false
    }

    localStorage.setItem(defaultKey, JSON.stringify(defaultDioBank))
}

export const getLocalStorage = (): IDioBank => {
    const str = localStorage.getItem(defaultKey)
    return str ? JSON.parse(str) : null
}

export const changeLocalStorage = (newDioBank: IDioBank): void => {
    localStorage.setItem(defaultKey, JSON.stringify(newDioBank))
}