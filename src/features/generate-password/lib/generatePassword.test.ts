import { generatePassword } from "./generatePassword";

describe("generatePassword function", () => {
  it("should return password with the given length", () => {
    const result = generatePassword({
      checkedUpperCase: true,
      checkedLowerCase: true,
      checkedNumbers: true,
      checkedSymbols: true,
      length: 15,
    });
    expect(result).toHaveLength(15);
  });
  it("should return password with upper case letters when upper case property is checked", () => {
    const result = generatePassword({
      checkedUpperCase: true,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).toMatch(/[A-Z]/);
  });
  it("should not return password with upper case letters when upper case property is not checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: true,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).not.toMatch(/[A-Z]/);
  });
  it("should return password with lower case letters when lower case property is checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: true,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).toMatch(/[a-z]/);
  });
  it("should not return password with lower case letters when lower case property is not checked", () => {
    const result = generatePassword({
      checkedUpperCase: true,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).not.toMatch(/[a-z]/);
  });
  it("should return password with numbers when numbers property is checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: false,
      checkedNumbers: true,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).toMatch(/[0-9]/);
  });
  it("should not return password with numbers when numbers property is not checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: true,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).not.toMatch(/[0-9]/);
  });
  it("should return password with symbols when symbols property is checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: true,
      length: 15,
    });
    expect(result).toMatch(/[!№;%:?*()_+=]/);
  });
  it("should not return password with symbols when symbols property is not checked", () => {
    const result = generatePassword({
      checkedUpperCase: false,
      checkedLowerCase: true,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 15,
    });
    expect(result).not.toMatch(/[!№;%:?*()_+=]/);
  });
  it("should return password with all properties when all property are checked", () => {
    const result = generatePassword({
      checkedUpperCase: true,
      checkedLowerCase: true,
      checkedNumbers: true,
      checkedSymbols: true,
      length: 15,
    });
    expect(result).toMatch(/[A-Z]/);
    expect(result).toMatch(/[a-z]/);
    expect(result).toMatch(/[0-9]/);
    expect(result).toMatch(/[!№;%:?*()_+=]/);
  });
});
