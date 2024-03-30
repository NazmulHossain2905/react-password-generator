export const checkPasswordStrength = (password) => {
  const length = password.length;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  let strength = 0;

  // Increase strength for each criteria met
  if (length >= 8) strength += 20;
  if (hasLowerCase) strength += 20;
  if (hasUpperCase) strength += 20;
  if (hasNumber) strength += 20;
  if (hasSymbol) strength += 20;

  // Cap strength at 100%
  strength = Math.min(strength, 100);

  return strength;
};
