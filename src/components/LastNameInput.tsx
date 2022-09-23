import { useState } from "react";
import ErrorHandler from "../ErrorChecks/ErrorHandler";

const LastNameInput = () => {
  const [lastName, setLastName] = useState<string>("");
  const isValidName = (name: string) => {
    return /^[a-z\s\-]*$/i.test(name);
  };
  return (
    <>
      {" "}
      <label>Last Name:</label>
      <input
        placeholder="Doe"
        type="text"
        name="lastName"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {lastName && !isValidName(lastName)
        ? ErrorHandler("lastName", true)
        : ErrorHandler("lastName", false)}
    </>
  );
};
export default LastNameInput;
