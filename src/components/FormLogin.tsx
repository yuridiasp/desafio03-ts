'use client'

import { Box, Card, Heading } from "@chakra-ui/react"
import { useState } from "react"

import { InputForm } from "./InputForm"
import { ButtonLogin } from "./Button"

import { login } from "../services/Login"

export const FormLogin = () => {

    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Card margin={'0px 20vw'} padding={'30px'} gap={'10px'}>
            <Box textAlign={'center'}>
                <Heading marginBottom={'10px'} size={'lg'}>Faça Login</Heading>
            </Box>
            <InputForm onChange={event => setEmail(event.target.value)} id="email" type="email" placeholder="E-mail" />
            <InputForm onChange={event => setPassword(event.target.value)} id="password" type="password" placeholder="Password" />
            <ButtonLogin onClick={() => login(email)} value="Entrar" />
        </Card>
    )
}