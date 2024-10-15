import { Button, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { LogoDio } from "./LogoDio"
import { AppContext } from "./AppContextProvider"
import { changeLocalStorage } from "../services/storage"

export const Header = () => {
    const navigate = useNavigate()

    const { isLoggedIn, setIsLoggedIn, user } = useContext(AppContext)

    const loggout = () => {
        setIsLoggedIn(false)
        changeLocalStorage({ user, login: false })
        navigate('/')
    }

    return (
        <Flex justifyContent={'space-between'} align={'center'} height={'10vh'} backgroundColor={'rgb(21, 21, 21)'} color={'#FFF'} padding={'0 50px'}>
            <Flex align={'center'}>
                <LogoDio width="98" height="40" />
                <Heading size={'2xl'}>Bank</Heading>
            </Flex>
            { isLoggedIn && (<Button onClick={() => loggout()} >Sair</Button>) }
        </Flex>
    )
}