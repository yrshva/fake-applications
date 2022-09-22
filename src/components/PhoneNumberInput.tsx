import { useState } from "react";
import ErrorHandler from "../ErrorChecks/ErrorHandler";

interface Props {
  countries: { name: string; dial_code: string }[];
  country: string;
}
const PhoneNumberInput = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const isValidNumber = (number: string) => {
    return /^\+[0-9]*$/i.test(number);
  };

  return (
    <>
      {" "}
      <label>Phone Number:</label>
      <input
        placeholder="1234567890"
        defaultValue={
          props.countries.find((el) => el.name === props.country)?.dial_code
        }
        type="tel"
        name="phoneNumber"
        required
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {phoneNumber && !isValidNumber(phoneNumber)
        ? ErrorHandler("phoneNumber", true)
        : ErrorHandler("phoneNumber", false)}
    </>
  );
};
export default PhoneNumberInput;
