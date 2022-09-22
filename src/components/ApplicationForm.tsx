import { FormEventHandler } from "react";
import EmailInput from "./EmailInput";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import CountryInput from "./CountryInput";
import "../styles/Form.css";
import "../styles/Datalist.css";

const ApplicationForm = (props: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <div className="applicationform">
      <form onSubmit={props.handleSubmit}>
        <FirstNameInput />
        <LastNameInput />
        <EmailInput />
        <CountryInput />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default ApplicationForm;
