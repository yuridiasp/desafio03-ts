import { login } from "../../../src/services/login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Testar função de Login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = "yuri@gmail.com"

    it('Deve exibir um alert com boas vindas caso email seja válido', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})