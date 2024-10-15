import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Conta = () => {

    return (
        <>
            <Link to={'/conta/1'}>
                <Text fontSize={'xl'} color={'white'}>
                    Conta
                </Text>
            </Link>
        </>
    )
}