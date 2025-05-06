# Desenvolvendo o Dio Bank
Projeto desenvolvido por [Nathally Souza](https://github.com/nathyts)
Desafio realizado por [Emanuele Bittencourt](https://www.linkedin.com/in/emanuele-bittencourt-quiquinato/)

#### Projeto desenvolvido com conceitos básicos de typescript

### Tecnologias
- Typescript
- Node.js

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm run dev

#### Desafios
[ ok ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[ ok ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[ ok ] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[ ok ] Todos os atributos de qualquer conta devem ser privados

[ ok ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ok ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

### Certificados de conclusão dos cursos

- [Introdução ao TypeScript](https://www.dio.me/certificate/SBUVDTVS/share)
- [Programação Orientada a Objetos com TypeScript](https://www.dio.me/certificate/KUWEZ4TK/share)
- [Construindo um app simples de banco com TypeScript](https://www.dio.me/certificate/G7GGLRHD/share)