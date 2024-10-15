import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {

    return (
        <Box backgroundColor={'white'} borderRadius={'10px'} margin={'0px 20vw'} padding={'30px'}>
            {children}
        </Box>
    )
}