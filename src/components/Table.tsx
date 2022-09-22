import { uid } from "uid";
interface Application {
  appId: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  phoneNumber: string;
}
const Table = (props: { applications: Application[] }) => {
  return (
    <table className="table table-striped table-bordered ">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Application ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Country</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {props.applications.map((application: Application, index: number) => (
          <tr key={uid()}>
            <th scope="row">{index + 1}</th>
            <td>{application.appId}</td>
            <td>{application.firstName}</td>
            <td>{application.lastName}</td>
            <td>{application.email}</td>
            <td>{application.country}</td>
            <td>{application.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
