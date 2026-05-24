interface GeneratePasswordParams {
  checkedUpperCase: boolean;
  checkedLowerCase: boolean;
  checkedNumbers: boolean;
  checkedSymbols: boolean;
  length: number;
}

export function generatePassword({
  checkedUpperCase,
  checkedLowerCase,
  checkedNumbers,
  checkedSymbols,
  length,
}: GeneratePasswordParams): string {
  let password: string = "";

  let symbols: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";

  for (let i = 0; i < length; i++) {
    if (!checkedNumbers) {
      symbols = symbols.match(/\D/gi)!.join("");
    }
    if (!checkedSymbols) {
      symbols = symbols.match(/[A-Za-z0-9]/gi)!.join("");
    }
    if (!checkedLowerCase) {
      symbols = symbols.match(/[^a-z]/g)!.join("");
    }
    if (!checkedUpperCase) {
      symbols = symbols.match(/[^A-Z]/g)!.join("");
    }

    const random = symbols.charAt(Math.floor(Math.random() * symbols.length));

    password += random;
  }

  if (checkedLowerCase && !/[a-z]/g.test(password)) {
    const min = 97;
    const max = 122;
    const smallLetter = String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1)) + min,
    );
    password = smallLetter + password.slice(1);
  }
  if (checkedUpperCase && !/[A-Z]/g.test(password)) {
    const min = 65;
    const max = 90;
    const bigLetter = String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1)) + min,
    );
    password = bigLetter + password.slice(1);
  }
  if (checkedNumbers && !/[0-9]/g.test(password)) {
    const min = 48;
    const max = 57;
    const number = String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1)) + min,
    );
    password = number + password.slice(1);
  }
  if (checkedSymbols && !/[!№;%:?*()_+=]/g.test(password)) {
    const min = 33;
    const max = 47;
    const symbol = String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1)) + min,
    );
    password = symbol + password.slice(1);
  }

  return password;
}
