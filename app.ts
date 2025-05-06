import { Account } from './class/Account'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { AdminAccount } from './class/AdminAccount'

// Instâncias de PeopleAccount

const peopleAccount = new PeopleAccount(123456789, 'Lucas', 78787999)
console.log(peopleAccount)

peopleAccount.deposit(1000)
console.log(peopleAccount.getBalance())

peopleAccount.withdraw(500)
console.log(peopleAccount.getBalance())

console.log(peopleAccount.getAccountNumber())
console.log(peopleAccount.getName())
console.log(peopleAccount.getStatus())




// Instâncias de companyAccount

const companyAccount = new CompanyAccount('DIO', 1234567890)
console.log(companyAccount)

companyAccount.getLoan(1000)
console.log(companyAccount.getBalance())

companyAccount.withdraw(500)
console.log(companyAccount.getBalance())

companyAccount.deposit(2000)
console.log(companyAccount.getBalance())

companyAccount.getLoan(1000)
console.log(companyAccount.getBalance())

console.log(companyAccount.getAccountNumber())
console.log(companyAccount.getName())
console.log(companyAccount.getStatus())


// Instâncias de AdminAccount

const adminAccount = new AdminAccount('Conta Admin', 567812345)
console.log(adminAccount)


adminAccount.adminDeposit(2000)
console.log(adminAccount.getBalance())


adminAccount.withdraw(500)
console.log(adminAccount.getBalance())

console.log(adminAccount.getAccountNumber())
console.log(adminAccount.getName())
console.log(adminAccount.getStatus())

