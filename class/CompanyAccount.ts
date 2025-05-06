import { Account } from "./Account";

export class CompanyAccount extends Account{
    constructor(name: string, accountNumber: number)  {
        super(name, accountNumber)
    }


    public getLoan(value: number): void {
        this.setBalance(this.getBalance() + value);
        console.log(`O valor de ${value} foi emprestado com sucesso!`);
      }
}
