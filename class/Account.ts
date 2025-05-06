
export  abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber

    }

    setName = (name:string): void => {
        this.name = name
        console.log(`O nome da conta foi alterado com sucesso!`)
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }


    deposit = (value:number): void => {
        this.setBalance(this.balance + value)
        console.log(`O valor de ${value} foi depositado com sucesso!`)
    }


    withdraw = (value:number): void => {
        this.setBalance(this.balance - value)
        console.log(`O valor de ${value} foi sacado com sucesso!`)
    }

    public getBalance = (): number => {
        console.log(`O saldo total é ${this.balance}`)
        return this.balance
    }

    setBalance = (value:number): void => {
        if(this.getStatus() == true){  
            this.balance = value
            console.log(`Seu saldo foi alterado!`)
        }
        else{
            throw new Error(`Você não pode alterar o saldo, pois sua conta está inativa.`)

        }
    }
    
    private readonly validatetatus = () => { 
        if(this.status == true){
            return this.status
        }else{
            throw new Error(`Conta inativa`)
        }
    }

    getStatus = (): boolean => {
        return this.status
    }
}
