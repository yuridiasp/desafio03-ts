import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../services/storage"

interface IAppContext {
    user: string
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<string>('')

    useEffect(() => {
        const storage = getLocalStorage()
    
        if(storage) {
            setIsLoggedIn(storage.login)
            setUser(storage.user)
        }
    }, [])

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}