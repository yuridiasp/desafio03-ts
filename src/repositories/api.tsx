export interface IUserData {
    id: string
    email: string
    password: string
    name: string
    balance: number
}

const data: IUserData = {
    id: '1',
    email: 'yuri@gmail.com',
    password: 'Teste@123',
    name: 'Yuri Dias',
    balance: 10000
}

export const api: Promise<IUserData> = new Promise(resolve => {
    setTimeout(() => {
        resolve(data)
    }, 3000)
})