# Validador de CPF
Projeto proposto pela Laboratoria durante o bootcamp de 2019.

Valida o número do CPF através dos dígitos verificadores (utilizando a regra matemática específica) e retornar true ou false de acordo com o caso.

## Como instalar:
```bash
$ npm install gtech-cpf-validator
```

## Como utilizar:
```javascript
const isValid = require('gtech-cpf-validator');
const cpfString = '214.076.310-63';
const cpfStringNumber = '49034986039';
const cpfNumber = 41606102001;

const valid = { 
  cpf1 : isValid.cpfValidator(cpfString),
  cpf2 : isValid.cpfValidator(cpfStringNumber),
  cpf3 : isValid.cpfValidator(cpfNumber)
}

//return { cpf1: true, cpf2: true, cpf3: true }
```
