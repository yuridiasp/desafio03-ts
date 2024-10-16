import { Box, SimpleGrid } from "@chakra-ui/react"
import { Header } from "./Header"
import { NavBar } from "./NavBar"
import { useContext } from "react"
import { AppContext } from "./AppContextProvider"

export const Layout = ({ children }: any) => {

    const { isLoggedIn } = useContext(AppContext)

    return (
        <>
            <Header />
            <SimpleGrid columns={2} gridTemplateColumns={'1fr' + (isLoggedIn ? ' 4fr' : '')}>
                { isLoggedIn && <NavBar /> }
                <Box paddingTop={'20px'} height={'90vh'} backgroundColor={'rgb(30, 25, 44)'}>
                    {children}
                </Box>
            </SimpleGrid>
        </>
    )
}