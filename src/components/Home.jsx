import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./login_signup/signup";
import Internverified from "./login_signup/internverified";
import {Login} from "./login_signup/login";
import CgSignup from "./login_signup/cgSignup";
import InternSignup from "./login_signup/internSignup";
import Login_mb from "./mobile_view/login_mb";
import Landing_page from "./landing_page/landing_page";
import Page_1 from "./volunteer_pages/page_1";
import VerticalStepper from "./volunteer_pages/verticalStepper";
import Form from "./volunteer_pages/form";
import Requirement_pages from "./volunteer_pages/requirement_pages";


const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<CgSignup />}/>
          <Route path="/internsignup" element={<InternSignup />}/>
          <Route path="/registration" element={<Signup />}/>
          <Route path="/verification" element={<Internverified />}/>
          <Route path="/mblogin" element={<Login_mb />}/>
          <Route path="/landingpage" element={<Landing_page />} />
          <Route path="/page1" element={<Page_1 />} />
          <Route path="/verticalStepper" element={<VerticalStepper />} />
          <Route path="/form" element={<Form />} />
          <Route path="/requirement" element={<Requirement_pages />} />



        </Routes>
      </Router>
    </>
  );
};

export default Home;