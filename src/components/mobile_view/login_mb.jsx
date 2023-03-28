import React from "react";

function login_mb() {
  return (
    <div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-12" style={{ padding: "0" }}>
          <div className="container w-100 g-2">
            <form>
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" />
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" />
            </form>
          </div>
        </div>
        <button className="btn btn-warning w-100 mt-3">Login</button>
      </div>
      <div className="container text-center" style={{ marginTop: "5%" }}>
        <a href="#" className="link-primary">
          Forgot Password?
        </a>
      </div>
      <div
        className="w-100 text-center"
        style={{ backgroundColor: "#E9ECEB", position: "relative", top: "3%" }}
      >
        <p style={{ color: "black" }}>First time user? Sign Up </p>
        <a href="#" className="link-primary">
          CGI Employees
        </a>
        <span> | </span>
        <a href="#" className="link-primary">
          CGI Interns
        </a>
      </div>
    </div>
  );
}

export default login_mb;
