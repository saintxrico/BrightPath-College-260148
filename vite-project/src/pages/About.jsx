function About() {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <h2 className="mb-3">About This System</h2>

        <p>
          The BrightPath College Student Management System is a small web
          application that lets administration staff browse all registered
          students and open a full profile for any individual student. It
          replaces the paper files and scattered spreadsheets currently used by
          the college.
        </p>

        <p>
          Student records are served by a JSON Server mock API while the real
          back-end system is being planned. The registration form is a visual
          prototype only and does not save data yet.
        </p>

        <h5 className="mt-4">Technologies Used</h5>
        <ul>
          <li>React — functional components and JSX</li>
          <li>React Router — page navigation and dynamic routes</li>
          <li>Bootstrap 5 — layout, navbar, cards and form styling</li>
          <li>JSON Server — mock REST API for the students resource</li>
          <li>fetch() — GET requests to the API</li>
        </ul>

        <div className="card shadow-sm mt-4">
          <div className="card-body">
            <h5 className="card-title">Developer</h5>
            <p className="mb-1">
              <strong>Name:</strong> Your Full Name
            </p>
            <p className="mb-0">
              <strong>Student ID:</strong> Your Student ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;