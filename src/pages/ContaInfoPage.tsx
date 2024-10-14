import { Text } from "@chakra-ui/react"
import Link from "next/link"

export const ContaInfoPage = () => {
    return (
        <>
            <Link href={'/conta/1'}>
                <Text fontSize={'xl'} color={'white'}>
                    Conta
                </Text>
            </Link>
        </>
    )
}