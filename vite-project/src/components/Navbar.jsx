import { Link, NavLink } from "react-router-dom";

// NavLink passes { isActive } to this function, so we can style the current page
function linkClass({ isActive }) {
  return isActive ? "nav-link active fw-bold" : "nav-link";
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          BrightPath College
        </Link>

        {/* Toggler for small screens - Bootstrap JS handles the collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* `end` stops Home being highlighted on every other route */}
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/students" className={linkClass}>
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add-student" className={linkClass}>
                Add Student
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;