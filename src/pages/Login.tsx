import { useContext, useState } from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { login } from "../services/login"

import { Card } from "../components/Card"
import { InputForm } from "../components/InputForm"
import { ButtonLogin } from "../components/Button"
import { AppContext } from "../components/AppContextProvider"
import { changeLocalStorage } from "../services/storage"

export const Login = () => {

    const { setIsLoggedIn } = useContext(AppContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const validateUser = async (email: string, password: string) => {
        const { loggedIn, user } = await login(email, password)

        if(!loggedIn) {
            return alert("Email ou senha divergente!")
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true, user })
        navigate('/conta/1')
    }

    return (
        <Card>
            <Box textAlign={'center'}>
                <Heading marginBottom={'10px'} size={'lg'}>Faça Login</Heading>
            </Box>
            <Flex flexDirection={'column'} gap={'10px'}>
                <InputForm onChange={event => setEmail(event.target.value)} id="email" type="email" placeholder="E-mail" />
                <InputForm onChange={event => setPassword(event.target.value)} id="password" type="password" placeholder="Password" />
                <ButtonLogin onClick={() => validateUser(email, password)} value="Entrar" />
            </Flex>
        </Card>
    )
}