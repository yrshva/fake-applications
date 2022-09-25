const ErrorCheck = (
  firstName: string,
  lastName: string,
  email: string,
  country: string,
  phoneNumber: string
) => {
  if (
    /^[A-Za-z0-9\-\.\_]+@[A-Za-z\-]+\.[A-Za-z]*$/.test(email) &&
    /^[a-z\s\-]*$/i.test(firstName) &&
    /^[a-z\s\-]*$/i.test(lastName) &&
    /^\+[0-9]*$/i.test(phoneNumber) &&
    /^[a-z\s\-]*$/i.test(country)
  ) {
    return false;
  } else {
    return true;
  }
};
export default ErrorCheck;
