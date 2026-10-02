function AddStudent() {
  // The form is a prototype: we stop the browser's default page reload,
  // but we deliberately do not save anything.
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <h2 className="mb-3">Register a New Student</h2>

        <div className="alert alert-info" role="alert">
          <strong>Note:</strong> this form is a prototype only. It does not save
          any data yet — the registration feature will be added in a later
          phase.
        </div>

        <form className="card shadow-sm" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="e.g. Amina Hassan"
              />
            </div>

            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@brightpath.edu"
                />
              </div>

              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  min="15"
                  max="60"
                  placeholder="e.g. 20"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select className="form-select" id="gender" defaultValue="">
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="course" className="form-label">
                Course
              </label>
              <select className="form-select" id="course" defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>
                <option value="Software Development">Software Development</option>
                <option value="Networking">Networking</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Business IT">Business IT</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;