const ErrorCheck = (
  firstName: string,
  lastName: string,
  email: string,
  country: string,
  phoneNumber: string
) => {
  if (
    /^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]*$/.test(email) &&
    /^[a-z]*$/i.test(firstName) &&
    /^[a-z]*$/i.test(lastName) &&
    /^\+[0-9]*$/i.test(phoneNumber) &&
    /^[a-z]*$/i.test(country)
  ) {
    return false;
  } else {
    return true;
  }
};
export default ErrorCheck;
