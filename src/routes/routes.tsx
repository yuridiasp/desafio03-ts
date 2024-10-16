import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Conta } from "../pages/Conta"
import { ContaInfo } from "../pages/ContaInfo"
import { useContext } from "react"
import { AppContext } from "../components/AppContextProvider"

export const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path="/" element={ isLoggedIn ? <ContaInfo /> : <App /> } />
            <Route path="conta" element={<Conta />} />
            <Route path="conta/:id" element={ isLoggedIn ? <ContaInfo /> : <App /> } />
        </Routes>
    )
}