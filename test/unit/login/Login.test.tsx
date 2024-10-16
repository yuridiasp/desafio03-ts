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
    const mockSenha = "Teste@123"

    it('Deve exibir um alert com boas vindas caso email e senha sejam válidos', async () => {
        const { loggedIn } = await login(mockEmail, mockSenha)
        expect(loggedIn).toBeTruthy()
    })

    it('Deve exibir um alert caso senha seja inválida', async () => {
        const { loggedIn } = await login(mockEmail, 'SenhaInvalida123')
        expect(loggedIn).toBeFalsy()
    })

    it('Deve exibir um erro caso o email', async () => {
        const { loggedIn } = await login('email@invalido.com', 'SenhaInvalida123')
        expect(loggedIn).toBeFalsy()
    })
})