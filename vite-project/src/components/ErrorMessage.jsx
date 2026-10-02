import { API_URL } from "../api";

function ErrorMessage({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      <h5 className="alert-heading">Something went wrong</h5>
      <p className="mb-2">{message}</p>
      <hr />
      <p className="mb-0 small">
        Please make sure JSON Server is running at <code>{API_URL}</code> and
        try again.
      </p>
    </div>
  );
}

export default ErrorMessage;