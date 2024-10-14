import { Box } from "@chakra-ui/react"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <Box paddingTop={'20px'} height={'90vh'} backgroundColor={'rgb(30, 25, 44)'}>
                {children}
            </Box>
        </>
    )
}