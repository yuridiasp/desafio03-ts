import { Route, Routes } from "react-router-dom"
import { useContext } from "react"

import App from "../App"
import { Conta } from "../pages/Conta"
import { ContaInfo } from "../pages/ContaInfo"
import { AppContext } from "../components/AppContextProvider"
import { User } from "../pages/User"

export const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path="/" element={ isLoggedIn ? <ContaInfo /> : <App /> } />
            <Route path="conta" element={<Conta />} />
            <Route path="user/:id" element={ isLoggedIn ? <User /> : <App /> } />
            <Route path="conta/:id" element={ isLoggedIn ? <ContaInfo /> : <App /> } />
        </Routes>
    )
}