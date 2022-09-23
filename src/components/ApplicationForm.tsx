import { FormEventHandler, useRef, useState } from "react";
import EmailInput from "./EmailInput";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import CountryInput from "./CountryInput";
import { CSSTransition } from "react-transition-group";

import "../styles/Form.css";
import "../styles/Datalist.css";

const ApplicationForm = (props: {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  const [apply, setApply] = useState(false);
  const [applyButton, setApplyButton] = useState(true);

  const nodeRef = useRef<any>(null);
  return (
    <div className="applicationform">
      {applyButton && (
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setApply(true)}
        >
          New Application
        </button>
      )}
      <CSSTransition
        nodeRef={nodeRef}
        in={apply}
        timeout={300}
        unmountOnExit
        onEnter={() => setApplyButton(false)}
        onExited={() => setApplyButton(true)}
        classNames="application"
      >
        <div ref={nodeRef}>
          <button
            className="btn alignright"
            type="button"
            onClick={() => setApply(false)}
          >
            X
          </button>
          <form onSubmit={props.handleSubmit}>
            <FirstNameInput />
            <LastNameInput />
            <EmailInput />
            <CountryInput />
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};
export default ApplicationForm;
