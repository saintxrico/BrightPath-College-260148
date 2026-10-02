import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="bg-light rounded-3 p-4 p-md-5 mb-4 text-center">
        <h1 className="display-5 fw-bold">BrightPath College</h1>
        <p className="lead">
          A simple student management system for browsing student records and
          viewing full student profiles.
        </p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
          <Link to="/students" className="btn btn-primary btn-lg px-4">
            View Students
          </Link>
          <Link to="/add-student" className="btn btn-outline-secondary btn-lg px-4">
            Add Student
          </Link>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Browse Students</h5>
              <p className="card-text mb-0">
                See every registered student at a glance in a responsive card
                layout.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Full Profiles</h5>
              <p className="card-text mb-0">
                Open any student to view their complete record on one page.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Register Students</h5>
              <p className="card-text mb-0">
                A registration form is being prepared for the next phase of the
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;