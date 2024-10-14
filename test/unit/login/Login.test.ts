import { login } from "../../../src/services/Login"

describe('Testar função de Login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = "yuri@gmail.com"

    it('Deve exibir um alert com boas vindas caso email seja válido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem vindo(a) ${mockEmail}!`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Seja bem vindo(a)!`)
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})