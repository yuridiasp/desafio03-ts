import { changeLocalStorage, createLocalStorage, getLocalStorage } from "../../../src/services/storage"

describe('Storage', () => {

    let moockDioBank = {
        user: '',
        login: false
    }

    beforeEach(() => {
        moockDioBank = {
            user: '',
            login: false
        }
    })

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no localStorage com a chave diobank',() => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')

        getLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(moockDioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        moockDioBank.login = true

        changeLocalStorage(moockDioBank)

        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(moockDioBank))
    })
})