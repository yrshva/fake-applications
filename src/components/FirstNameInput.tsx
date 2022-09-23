import { useState } from "react";
import ErrorHandler from "../ErrorChecks/ErrorHandler";

const FirstNameInput = () => {
  const [firstName, setFirstName] = useState<string>("");
  const isValidName = (name: string) => {
    return /^[a-z\s\-]*$/i.test(name);
  };
  return (
    <>
      {" "}
      <label>First Name:</label>
      <input
        placeholder="John"
        type="text"
        name="firstName"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {firstName && !isValidName(firstName)
        ? ErrorHandler("firstName", true)
        : ErrorHandler("firstName", false)}
    </>
  );
};
export default FirstNameInput;
