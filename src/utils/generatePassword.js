export const generatePassword = (
  length = 1,
  isUpperCase,
  isLowerCase,
  isNumber,
  isSymbol
) => {
  const upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCharacter = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = `~!@#$%^&*_+-=[{()}]"|\\:;'/`;

  let password = "";

  if (isUpperCase && password.length < length) {
    password +=
      upperCharacter[Math.floor(Math.random() * upperCharacter.length)];
  }

  if (isLowerCase && password.length < length) {
    password +=
      lowerCharacter[Math.floor(Math.random() * lowerCharacter.length)];
  }

  if (isNumber && password.length < length) {
    password += number[Math.floor(Math.random() * number.length)];
  }

  if (isSymbol && password.length < length) {
    password += symbol[Math.floor(Math.random() * symbol.length)];
  }

  const allCharacters = upperCharacter + lowerCharacter + number + symbol;

  while (password.length < length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password;
};
