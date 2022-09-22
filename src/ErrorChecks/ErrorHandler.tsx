const ErrorHandler = (name: string, error: boolean) => {
  switch (name) {
    case "firstName":
      if (error) {
        return <p className="error_message">Only latin letters are allowed</p>;
      } else return null;
    case "lastName":
      if (error) {
        return <p className="error_message">Only latin letters are allowed</p>;
      } else return null;

    case "email":
      if (error) {
        return (
          <p className="error_message">Please enter correct email address</p>
        );
      } else return null;
    case "phoneNumber":
      if (error) {
        return (
          <p className="error_message">
            The number should start with a plus and contain digits only
          </p>
        );
      } else return null;
  }
};
export default ErrorHandler;
