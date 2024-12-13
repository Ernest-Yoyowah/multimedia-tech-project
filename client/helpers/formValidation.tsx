export const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const regex = /^\d{10}$/; // Only 10-digit numbers
  return regex.test(phone);
};

export const validatePassword = (password: string): boolean => {
  // Example: password must be at least 6 characters
  return password.length >= 6;
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
