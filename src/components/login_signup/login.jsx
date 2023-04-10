import React, { useState } from "react";
import "./login.css";
// import "./cgSignup.css";
import arrow from "../../images/back_arrow.png";
import cglogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";
import styled from "styled-components";
import Login_mb from "../mobile_view/login_mb";

const MainContainer = styled.div.attrs({ className: "main-container" })`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LeftContainer = styled.div.attrs({ className: "left-container" })`
  background-color: #002c3f;
  display: flex;
  align-items: center;
  justify-content: center;
  
 @media screen and (max-width : 540px) {
  
    display: none;

} 

`;
const RightContainer = styled.div.attrs({ className: "right-container" })`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const BuildingImage = styled.img.attrs({ className: "img-fluid" })`
  position: relative;
  bottom: 4%;
`;



function Login() {

  return (
    
    <MainContainer
      className="container main-container "
      style={{ padding: "0" }}
    >
      <div className="row main-row " style={{ height: "552px" }}>
        { (window.innerWidth >= 576) && <LeftContainer
          className="col-6 left-container d-none-md"
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
        >
          <div className="row" style={{ width: "85%" }}>
            <div className="col-12 text-center">
              <BuildingImage className="img-fluid" src={building} style={{}} />
              <p className="find-accomo">Find Your Accommodation</p>
              <p className="description">
                This is an online platform that helps other to find
                accommodation
              </p>
            </div>
          </div>
        </LeftContainer>}
        <RightContainer
          className="col-12 col-sm-6 right-container "
          style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" ,padding:"0 4%"}}
        >
          <div className="row" style={{padding:"0 4%"}} >
            <div className="col-12 text-center mb-4 mt-5">
              <img className="img-fluid" src={cglogo} />
              <h4 className="main-heading mt-3" style={{fontSize:"20px"}}>
                Let's Find Your Accommodation
              </h4>
            </div>
          </div>
          <div className="row" style={{width:"100%"}}>
            <div
              className="col-12"
              style={{ padding:"0" }}
            >
              
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
            <a  href="#" className="link-primary">Forgot Password?</a>
          </div>
          <div className="w-100 text-center" style={{backgroundColor:"#E9ECEB",position:"relative",top:"3%"}}>
            <p style={{color:"black"}}>First time user? Sign Up </p>
            <a href="#" className="link-primary">CGI Employees</a>
            <span> | </span>
            <a href="#" className="link-primary">CGI Interns</a>
          </div>
        </RightContainer>
      </div>
    </MainContainer>
    

  );
}

export {Login,RightContainer};
