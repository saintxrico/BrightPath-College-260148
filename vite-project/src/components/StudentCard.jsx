import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-1">{student.name}</h5>
          <h6 className="card-subtitle mb-3 text-muted">{student.course}</h6>

          <p className="card-text mb-1">
            <strong>Email:</strong> {student.email}
          </p>
          <p className="card-text mb-3">
            <strong>Age:</strong> {student.age}
          </p>

          <Link
            to={`/students/${student.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;