import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../utils/getData'
import { IUserData } from '../repositories/api'


export const NavBar = () => {

    const [userData, setUserData] = useState<IUserData>()
    
    useEffect(() => {
        getData().then(data => {
            setUserData(data)
        })
    }, [])

    return (
        <nav>
            <Flex color={'white'} flexDirection={'column'} padding={'10px'} gap={'10px'} backgroundColor={'rgb(11, 10, 18)'} height={'100%'}>
                <Link to={`/conta/${userData?.id}`}>Conta</Link>
                <Link to={`/user/${userData?.id}`}>User</Link>
            </Flex>
        </nav>
    )
}