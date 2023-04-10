import React from "react";
import cglogo from "../../images/cgLogo.png";
import { RightContainer } from "../login_signup/login";

function login_mb() {
  return (
    // <div style={{width:"60%",marginLeft:"5%"}}>
    //   <div className="row">
    //     <div className="col-12" style={{ padding: "0" }}>
    //       <div className="container g-2">
    //         <form>
    //           <label for="email" className="form-label">
    //             Email
    //           </label>
    //           <input type="email" className="form-control" />
    //           <label for="password" className="form-label">
    //             Password
    //           </label>
    //           <input type="password" className="form-control" />
    //         </form>
    //       </div>
    //     </div>
    //     <button className="btn btn-warning w-100 mt-3">Login</button>
    //   </div>
    //   <div className="container text-center" style={{ marginTop: "5%" }}>
    //     <a href="#" className="link-primary">
    //       Forgot Password?
    //     </a>
    //   </div>
    //   <div
    //     className="w-100 text-center"
    //     style={{ backgroundColor: "#E9ECEB", position: "relative", top: "3%" }}
    //   >
    //     <p style={{ color: "black" }}>First time user? Sign Up </p>
    //     <a href="#" className="link-primary">
    //       CGI Employees
    //     </a>
    //     <span> | </span>
    //     <a href="#" className="link-primary">
    //       CGI Interns
    //     </a>
    //   </div>
    // </div>
    <>
     <div className="container">

     
      <div className="row" style={{ padding: "0 4%" }}>
        <div className="col-12 text-center mb-4 mt-5">
          <img className="img-fluid" src={cglogo} />
          <h4
            className="main-heading mt-3"
            style={{ fontSize: "20px", color: "#28519E" }}
          >
            Find Your Accommodation
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ padding: "0" }}>
          <div className="container g-2">
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
        <button className="btn btn-warning  mt-3">Login</button>
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
    </>
  );
}

export default login_mb;
