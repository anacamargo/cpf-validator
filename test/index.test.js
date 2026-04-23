const { cpfValidator } = require("../index");

describe("CPF validator", () => {
  describe("When CPF is valid", () => {
    it("Should accept CPF string with dashes and dots", () => {
      const cpf = "747.376.750-08";
      expect(cpfValidator(cpf)).toBeTruthy();
    });

    it("Should accept number s only string", () => {
      const cpf = "74737675008";
      expect(cpfValidator(cpf)).toBeTruthy();
    });

    it("Should accept just numbers", () => {
      const cpf = 74737675008;
      expect(cpfValidator(cpf)).toBeTruthy();
    });

    it("When division of a digit results in 10 remain should be zero", () => {
      const cpf = "747.376.750-08";
      expect(cpfValidator(cpf)).toBeTruthy();
    });
  });

  describe("When CPF is not valid", () => {
    it("When all numbers are zeros", () => {
      const cpf = "000.000.000-00";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("When all numbers are ones", () => {
      const cpf = "111.111.111-11";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("When all numbers are fives", () => {
      const cpf = "55555555555";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("When all numbers are nines", () => {
      const cpf = "99999999999";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("When any char is not number", () => {
      const cpf = "meucpf74737675008";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("Char quantity smaller than 11", () => {
      const cpf = "3887683102";
      expect(cpfValidator(cpf)).toBe(false);
    });

    it("Char quantity greater than 11", () => {
      const cpf = "972222870608";
      expect(cpfValidator(cpf)).toBe(false);
    });
  });
});
