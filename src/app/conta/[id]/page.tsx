'use client'

import { useContext, useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { ChakraProvider } from "@chakra-ui/react"

import { Layout } from "@/components/Layout"
import { ContaPage } from "@/pages/ContaPage"
import { getData } from "@/utils/getData"
import { IUserData } from "@/repositories/api"
import { AppContext, AppContextProvider } from "@/components/AppContextProvider"

export default function Conta({ params }: { params: { id: string } }) {

    const [userData, setUserData] = useState<IUserData>()

    const context = useContext(AppContext)
    console.log('Context da conta[id] ', context)
    
    useEffect(() => {
        getData().then(data => {
            setUserData(data)
            console.log(params, data)
        })
    }, [])
    
    if (userData && params.id !== userData.id) {
        redirect('/')
    }
    return (
        <AppContextProvider>
            <ChakraProvider>
                <Layout>
                <ContaPage />
                </Layout>
            </ChakraProvider>
        </AppContextProvider>
    )

}
