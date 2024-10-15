import { useState } from "react"
import { Card } from "../components/Card"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { InputForm } from "../components/InputForm"
import { ButtonLogin } from "../components/Button"
import { login } from "../services/login"

export const Home = () => {
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    console.log(password)

    return (
        <Card>
            <Box textAlign={'center'}>
                <Heading marginBottom={'10px'} size={'lg'}>Faça Login</Heading>
            </Box>
            <Flex flexDirection={'column'} gap={'10px'}>
                <InputForm onChange={event => setEmail(event.target.value)} id="email" type="email" placeholder="E-mail" />
                <InputForm onChange={event => setPassword(event.target.value)} id="password" type="password" placeholder="Password" />
                <ButtonLogin onClick={() => login(email)} value="Entrar" />
            </Flex>
        </Card>
    )
}