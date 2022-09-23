import { useEffect, useState } from "react";
import axios from "axios";
import { uid } from "uid";
import { ThreeDots } from "react-loader-spinner";
import ApplicationForm from "./components/ApplicationForm";
import Table from "./components/Table";
import ErrorCheck from "./ErrorChecks/ErrorCheck";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [applications, setApplications] = useState();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: { target: any; preventDefault: () => void }) => {
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      country: e.target.country.value,
      phoneNumber: e.target.phoneNumber.value,
    };
    if (
      ErrorCheck(
        data.firstName,
        data.lastName,
        data.email,
        data.country,
        data.phoneNumber
      )
    ) {
      e.preventDefault();
      alert("Please enter correct information");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:3004/applications", {
          appId: uid(),
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          country: data.country,
          phoneNumber: data.phoneNumber,
        })
        .catch((error) => console.error(error.response.data));
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3004/applications")
      .then((result) => setApplications(result.data))
      .catch((error) => console.log(error.response.data));
  }, [loading]);
  useEffect(() => setLoading(false), [applications]);
  return (
    <div className="App">
      <ApplicationForm handleSubmit={handleSubmit} />

      {!loading && applications ? (
        <Table applications={applications} />
      ) : (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#212529"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      )}
    </div>
  );
}

export default App;
