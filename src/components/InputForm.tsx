import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"

interface IInputForm {
    placeholder: string
    type: string
    id: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const InputForm = ({ placeholder, type, id, onChange }: IInputForm) => {
    return (
        <Input onChange={onChange} placeholder={placeholder} type={type} id={id} />
    )
}