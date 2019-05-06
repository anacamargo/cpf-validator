# Validador de CPF
Valida o número do CPF através dos dígitos verificadores (utilizando a regra matemática específica) e retornar true ou false de acordo com o caso.

## Como instalar:
```bash
$ npm install gtech-cpf-validator
```

## Como utilizar:
```javascript
const CpfValidator = require('gtech-cpf-validator');
const cpfString = '214.076.310-63';
const cpfStringNumber = '49034986039';
const cpfNumber = 41606102001;

const valid = { 
  cpf1 : CpfValidator.cpfValidator(cpfString),
  cpf2 : CpfValidator.cpfValidator(cpfStringNumber),
  cpf3 : CpfValidator.cpfValidator(cpfNumber)
}

//return { cpf1: true, cpf2: true, cpf3: true }
```
