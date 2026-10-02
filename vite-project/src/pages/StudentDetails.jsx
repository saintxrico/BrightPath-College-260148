import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function StudentDetails() {
  // Reads the :id part of the URL
  const { id } = useParams();

  // Fetches ONE student, not the whole list
  const { data: student, loading, error } = useFetch(`${API_URL}/students/${id}`);

  if (loading) {
    return <Loading message="Loading student..." />;
  }

  if (error) {
    // JSON Server returns 404 when the id does not exist
    if (error.status === 404) {
      return (
        <div className="text-center py-5">
          <h3>Student not found</h3>
          <p className="text-muted">
            No student exists with the id <strong>{id}</strong>.
          </p>
          <Link to="/students" className="btn btn-primary">
            Back to Students
          </Link>
        </div>
      );
    }

    // Any other problem (e.g. the server is switched off)
    return <ErrorMessage message={error.message} />;
  }

  if (!student) {
    return null;
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <Link to="/students" className="btn btn-link px-0 mb-3">
          &larr; Back to Students
        </Link>

        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">{student.name}</h3>
          </div>

          <div className="card-body">
            <dl className="row mb-0">
              <dt className="col-sm-4">Student ID</dt>
              <dd className="col-sm-8">{student.id}</dd>

              <dt className="col-sm-4">Email</dt>
              <dd className="col-sm-8">{student.email}</dd>

              <dt className="col-sm-4">Age</dt>
              <dd className="col-sm-8">{student.age}</dd>

              <dt className="col-sm-4">Gender</dt>
              <dd className="col-sm-8">{student.gender}</dd>

              <dt className="col-sm-4">Course</dt>
              <dd className="col-sm-8">{student.course}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;