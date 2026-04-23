function cpfValidator(number) {
  const regex = /([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})/g;
  const match = regex.exec(number);

  if (match !== null) {
    const CPFNumbersWithoutValidationDigits = match[1] + match[2] + match[3];
    const partialCPF = [...CPFNumbersWithoutValidationDigits].map((char) =>
      parseInt(char),
    );

    if (
      match.input === match[0] &&
      !partialCPF.every((num) => num === partialCPF[0])
    ) {
      const firstDigit = validateDigits(partialCPF);
      const newPartialCPF = [...partialCPF, firstDigit];
      const secondDigit = validateDigits(newPartialCPF);
      const validationDigits = `${firstDigit}${secondDigit}`;
      return match[4] === validationDigits;
    }
  }
  return false;
}

function validateDigits(digitsCpf) {
  const multiplyDigits = digitsCpf.map((number, index, array) => {
    return number * (array.length + 1 - index);
  });

  const sumDigits = multiplyDigits.reduce((acc, currentValue) => {
    return acc + currentValue;
  });

  const result = (sumDigits * 10) % 11;
  if (result === 10) return 0;
  else return result;
}

module.exports.cpfValidator = cpfValidator;
