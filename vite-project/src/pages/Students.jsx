import useFetch from "../hooks/useFetch";
import { STUDENTS_URL } from "../api";
import StudentCard from "../components/StudentCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Students() {
  const { data: students, loading, error } = useFetch(STUDENTS_URL);

  if (loading) {
    return <Loading message="Loading students..." />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div>
      <h2 className="mb-4">All Students</h2>

      {students.length === 0 ? (
        <div className="alert alert-info">No students found.</div>
      ) : (
        <div className="row">
          {students.map((student) => (
            // student.id is the stable, unique key - never use the index
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;