import { Button, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"

import { LogoDio } from "./LogoDio"
import { AppContext } from "./AppContextProvider"

export const Header = () => {

    const context = useContext(AppContext)
    console.log('Context do header', context)

    return (
        <Flex justifyContent={'space-between'} align={'center'} height={'10vh'} backgroundColor={'rgb(21, 21, 21)'} color={'#FFF'} padding={'0 50px'}>
            <Flex align={'center'}>
                <LogoDio width="98" height="40" />
                <Heading size={'2xl'}>Bank</Heading>
            </Flex>
            <Button>Sair</Button>
        </Flex>
    )
}