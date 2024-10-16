import { Box, Center, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IUserData } from "../repositories/api"
import { getData } from "../utils/getData"

export const User = () => {
    
    const { id } = useParams()

    const [userData, setUserData] = useState<IUserData>()
    
    useEffect(() => {
        getData().then(data => {
            setUserData(data)
            console.log(id, data)
        })
    }, [])
    
    return (
        <Box margin={'10px 20px'}>
            { !userData ?
                ( <Center>
                    <Spinner size={'xl'} color="white"/>
                </Center> )
                :
                (<CardInfo mainContent="Yuri Dias Pereira Gomes" content="yuri@gmail.com" />)
            }
        </Box>
    )
}