import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IButtonLogin {
    value: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const ButtonLogin = ({ value, onClick }: IButtonLogin) => {
    return (
        <Button onClick={onClick} colorScheme='teal' size='md' type="submit">{value}</Button>
    )
}