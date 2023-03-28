import React from "react";
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";
import "./signup.css";

const Signup = () => {
  return (
    // <section>
    //   <div classNameName="container">
    //     <div classNameName="row">
    //       <div>
    //         <div classNameName="d-flex justify-content-center">
    //           <img src={logo} alt="" />
    //         </div>
    //         <div classNameName="hello" style={{ marginTop: "16px" }}>
    //           <p>Let’ Find Your Accommodation</p>
    //         </div>
    //       </div>

    //       <div>
    //         <form>
    //           <div classNameName="mb-3">
    //             <p classNameName="form-label">First Name</p>
    //             <input
    //               typeof="text"
    //               classNameName="form-control"
    //               aria-describedby="emailHelp"
    //               placeholder="First"
    //             />
    //           </div>

    //           <div classNameName="mb-3">
    //             <label for="exampleInputPassword1" className="form-label">
    //               Last Name
    //             </label>
    //             <input
    //               typeof="text"
    //               classNameName="form-control"
    //               placeholder="Last"
    //             />
    //           </div>

    //           <div classNameName="mb-3">
    //             <label for="exampleInputPassword1" className="form-label">
    //               Aadhar Card Number
    //             </label>
    //             <input
    //               typeof="number"
    //               classNameName="form-control"
    //               placeholder="--- ---- ----"
    //             />
    //           </div>

    //           <div classNameName="mb-3">
    //             <label for="exampleInputPassword1" className="form-label">
    //               University Email ID
    //             </label>
    //             <input
    //               typeof="email"
    //               classNameName="form-control"
    //               placeholder=" Enter Your University Email ID"
    //             />
    //           </div>

    //           <div classNameName="mb-3">
    //             <label for="exampleInputPassword1" className="form-label">
    //               Contact Number
    //             </label>
    //             <input
    //               typeof="number"
    //               classNameName="form-control"
    //               placeholder=" Enter Contact Number"
    //             />
    //           </div>

    //           <div classNameName="mb-3">
    //             <label for="exampleInputPassword1" className="form-label">
    //               University / College
    //             </label>
    //             <input
    //               typeof="text"
    //               classNameName="form-control"
    //               placeholder=" Enter your University/College"
    //             />
    //           </div>

    //           <div style={{ padding: "4px 16px" }}>
    //             <button classNameName="btn btn-warning remove">Sign Up</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className="">
    //   <div className="container cls-1 py-5" style={{ filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15))" }}>
    //     <div className="row d-flex justify-content-center">
    //       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    //         <div className="card">
    //           <div className="card-body p-5 text-center">
    //             <div className="row">
    //               <div className="row d-flex justify-content-center">
    //                 <img width={"248px"} height="50px" src={logo} alt="" />
    //               </div>
    //               <div className="hello mt-3" >
    //                 <p>Let’ Find Your Accommodation</p>
    //               </div>
    //             </div>

    //             <div className="row">
    //               <form>
    //                 <div className="row">
    //                   <div
    //                     className="col-md-6 mb-3 mt-4"
    //                   >
    //                     {/* <label
    //                       className="form-label"
    //                     >
    //                       First Name
    //                     </label> */}
    //                     <p className="form-label">First Name</p>
    //                     <input
    //                       typeof="text"
    //                       className="form-control"
    //                       aria-describedby="emailHelp"
    //                       placeholder="First"
    //                     />
    //                   </div>

    //                   <div
    //                     className="col-md-6 mb-3"
    //                     style={{ marginTop: "24px"}}
    //                   >
    //                     <label
    //                       for="exampleInputPassword1"
    //                       className="form-label"
    //                     >
    //                       Last Name
    //                     </label>
    //                     <input
    //                       typeof="text"
    //                       className="form-control"
    //                       placeholder="Last"
    //                     />
    //                   </div>
    //                 </div>

    //                 <div className="mb-3" style={{ marginTop: "24px" }}>
    //                   <label for="exampleInputPassword1" className="form-label">
    //                     Aadhar Card Number
    //                   </label>
    //                   <input
    //                     typeof="number"
    //                     className="form-control"
    //                     placeholder="--- ---- ----"
    //                   />
    //                 </div>

    //                 <div className="mb-3" style={{ marginTop: "24px" }}>
    //                   <label for="exampleInputPassword1" className="form-label">
    //                     University Email ID
    //                   </label>
    //                   <input
    //                     typeof="email"
    //                     className="form-control"
    //                     placeholder=" Enter Your University Email ID"
    //                   />
    //                 </div>

    //                 <div
    //                   className="w-100"
    //                   style={{ backgroundColor: "#E3F3FC" }}
    //                 >
    //                   <i className="bi bi-exclamation-circle-fill"></i>
    //                   <p className="">
    //                     This email account will be used to send password
    //                     instructions
    //                   </p>
    //                 </div>

    //                 <div className="" style={{ marginTop: "24px" }}>
    //                   <label for="exampleInputPassword1" className="form-label">
    //                     Contact Number
    //                   </label>
    //                   <input
    //                     typeof="number"
    //                     className="form-control"
    //                     placeholder=" Enter Contact Number"
    //                   />
    //                 </div>

    //                 <div className="mb-3" style={{ marginTop: "24px" }}>
    //                   <label for="exampleInputPassword1" className="form-label">
    //                     University / College
    //                   </label>
    //                   <input
    //                     typeof="text"
    //                     className="form-control"
    //                     placeholder=" Enter your University/College"
    //                   />
    //                 </div>
    //                 <div className="" style={{}}>
    //                   <button
    //                     className="btn btn-warning remove w-100"
    //                     style={{ marginTop: "36px", marginBottom: "24px" }}
    //                   >
    //                     Sign Up
    //                   </button>
    //                   <a
    //                     href="/Login"
    //                     style={{ color: "#28519E", textDecoration: "none" }}
    //                   >
    //                     Already have an account Login
    //                   </a>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div
      className="container-fluid d-flex align-content-center justify-content-center p-4 mt-5" 
    >
      <div className="inner_div mt-4">
        <div className="row mb-4">
          <div>
            <div className="d-flex justify-content-center">
              <img src={logo} alt=""/>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="heading-name" style={{color:"black"}}>Lets Find Your Accommodation</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-6">
            <p className="space">First Name</p>
            <input type="text" className="form-control" placeholder="First"/>
          </div>
          <div className="col-6">
            <p className="space">Last Name</p>
            <input type="text" className="form-control" placeholder="Last"/>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">Aadhar Card Number</p>
            <input type="text" className="form-control"  placeholder="--- ---- ----"/>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12">
            <p className="space">University Email ID</p>
            <input type="text" className="form-control" placeholder="Enter Your University Email ID"/>
          </div>
        </div>

        <div className="row mb-4  mt-1 hello">
          <div className="col-12 d-flex" style={{ backgroundColor: "#E3F3FC" , borderRadius:'4px'}}>
            <img src={vector} alt="" className="img2"/>
            <p className="mb-2 mt-2 alerttext" style={{color:"black"}}>
              This email account will be used to send password instructions
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">Contact Number</p>
            <input type="text" className="form-control" placeholder="Enter Contact Number"/>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <p className="space">University / College</p>
            <input type="text" className="form-control" placeholder="Enter your University/College"/>
          </div>
        </div>

        <div className="row nspace mb-4">
          <div className="col-12 butn">
            <button className=" py-1 px-3">Sign Up</button>
          </div>
        </div>

        <div className="row mb-4">
          <a className="alink" href="/Login">Already have an account Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;