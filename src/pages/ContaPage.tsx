'use client'

import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"

import { CardInfo } from "../components/CardInfo"
import { useEffect, useState } from "react"
import { IUserData } from "@/repositories/api"
import { getData } from "@/utils/getData"

export const ContaPage = () => {

    const [userData, setUserData] = useState<IUserData>()

    useEffect(() => {
        getData().then(data => setUserData(data))
    }, [])

    const actualData = new Date()

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8}>
                { !userData ?
                    ( <Center>
                        <Spinner size={'xl'} color="white"/>
                    </Center> )
                    :
                    (<>
                        <CardInfo mainContent={`Bem vindo(a), ${userData?.name}!`} content={`${actualData.toLocaleDateString('pt-BR', { timeZone: "America/Recife" })} ${actualData.toLocaleTimeString('pt-BR', { timeZone: "America/Recife", hour: "2-digit", minute: "2-digit", second: "2-digit" })}`}/>
                        <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance.toLocaleString('pt-BR')}`}/>
                    </>)
                }
            </SimpleGrid>
        </Center>
    )
}