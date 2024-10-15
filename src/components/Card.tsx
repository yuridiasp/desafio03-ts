import { Box } from "@chakra-ui/react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card = ({ children }: any) => {

    return (
        <Box margin={'0px 20vw'} padding={'30px'}>
            {children}
        </Box>
    )
}