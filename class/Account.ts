
export  class Account {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
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


    deposit = (): void => {
        if(this.validadeStatus() == true){
            console.log(`Você depositou`)
        }
    }

    withdraw = (): void => {
        console.log(`Você sacou`)
    }

    getBalance = (): void => {
        console.log(`O saldo é ${this.balance}`)
    }
    
    private validadeStatus = () => { 
        if(this.status == true){
            return this.status
        }else{
            throw new Error(`Conta inativa`)
        }
    }
}