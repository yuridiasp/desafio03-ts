'use client'

import { ChakraProvider } from "@chakra-ui/react"

import { Layout } from "../../components/Layout"
import { ContaInfoPage } from "@/pages/ContaInfoPage"
import { AppContext, AppContextProvider } from "@/components/AppContextProvider"
import { useContext } from "react"

export default function ContaInfo() {

  const context = useContext(AppContext)
  console.log('Context da conta ', context)

  return (
    <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <ContaInfoPage />
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  )
}
