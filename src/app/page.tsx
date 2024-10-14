'use client'

import { ChakraProvider } from "@chakra-ui/react"

import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { AppContextProvider } from "@/components/AppContextProvider"

export default function App() {

  return (
    <AppContextProvider>
      <ChakraProvider>
        <Layout>
          <Home />
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  )
}
