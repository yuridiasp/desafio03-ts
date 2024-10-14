import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string,
    content: string
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <Box borderRadius={'10px'} backgroundColor={'white'} padding={8} minWidth={'320px'} minHeight={'120px'}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>{mainContent}</Text>
            <Text fontSize={'xl'}>{content}</Text>
        </Box>
    )
}