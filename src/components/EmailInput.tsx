import { useState } from "react";
import ErrorHandler from "../ErrorChecks/ErrorHandler";

const EmailInput = () => {
  const [email, setEmail] = useState<string>("");
  const isValidEmail = (email: string) => {
    return /^[A-Za-z0-9\-\.\_]+@[A-Za-z\-]+\.[A-Za-z]*$/.test(email);
  };
  return (
    <>
      <label>Email:</label>
      <input
        placeholder="test1@gmail.com"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email && !isValidEmail(email)
        ? ErrorHandler("email", true)
        : ErrorHandler("email", false)}
    </>
  );
};
export default EmailInput;
