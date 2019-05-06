function cpfValidator(number) {
  const regex = /([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})/g; // eslint-disable-line no-useless-escape
  const match = regex.exec(number);

  if (match !== null) {
    const CPFNumbersWithoutValidationDigits = match[1] + match[2] + match[3];
    const parcialCPF = [...CPFNumbersWithoutValidationDigits].map(char => parseInt(char));

    if (match.input === match[0] && (!parcialCPF.every(num => num === parcialCPF[0]))) {
      const firstDigit = validateDigits(parcialCPF);
      const newParcialCPF = [...parcialCPF, firstDigit];
      const secondDigit = validateDigits(newParcialCPF);
      const validationDigits = `${firstDigit}${secondDigit}`;

      if (match[4] === validationDigits) return true;
    }
  }
  return false;
}

function validateDigits(digitsCpf) {
  const multiplyDigits = digitsCpf.map((number, indice, array) => {
    return number * ((array.length + 1) - indice);
  });

  const sumDigits = multiplyDigits.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  const result = ((sumDigits * 10) % 11);
  if (result === 10) return 0;
  else return result;
}

module.exports.cpfValidator = cpfValidator;