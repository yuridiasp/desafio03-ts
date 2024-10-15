import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Flex flexDirection={'column'} textAlign={'center'} gap={'20px'} color={'white'}>
        <Heading>Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>{error.statusText || error.message}</Text>
    </Flex>
  );
}