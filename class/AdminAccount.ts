import { Account } from "./Account";

export class AdminAccount extends Account {
    constructor(name: string, accountNumber: number) {
      super(name, accountNumber);
    }
  
    public adminDeposit(value: number): void {
      this.setBalance(this.getBalance() + value + 10);
      console.log(`O valor de ${value} foi depositado com sucesso!`);
    }
  }
