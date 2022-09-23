import { useCallback, useMemo, useState } from "react";
import {
  DatalistInput,
  includesValueFilter,
  Filter,
} from "react-datalist-input";
import { uid } from "uid";
import { countries } from "../countries";
import ErrorHandler from "../ErrorChecks/ErrorHandler";
import PhoneNumberInput from "./PhoneNumberInput";

const CountryInput = () => {
  const [country, setCountry] = useState<string>("");
  const limitOptionsFilter: Filter = useCallback(
    (items) => items.slice(0, 3),
    []
  );
  const filters = [includesValueFilter, limitOptionsFilter];
  const items = useMemo(
    () =>
      countries.map((country: { name: string }) => ({
        id: uid(),
        value: country.name,
      })),
    []
  );
  const isValidCountry = (country: string) => {
    return /^[a-z\s\-]*$/i.test(country);
  };
  return (
    <>
      <DatalistInput
        label="Country:"
        value={country}
        setValue={setCountry}
        placeholder="Ukraine"
        items={items}
        filters={filters}
        onSelect={(item) => {
          setCountry(item.value);
        }}
        inputProps={{
          required: true,
          name: "country",
          readOnly: false,
        }}
      />
      {country && !isValidCountry(country)
        ? ErrorHandler("firstName", true)
        : ErrorHandler("firstName", false)}
      <PhoneNumberInput country={country} countries={countries} />
    </>
  );
};
export default CountryInput;
