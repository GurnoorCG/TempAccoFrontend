import React, { useState } from "react";
import VerticalStepper from "./verticalStepper";
import styled from "styled-components";
import pages_info from "./pagesInfo";
import Navbar from "../landing_page/navbar";

const MainContainer = styled.div`
  display: flex;

  height: 100vh;
`;
const FormContainer = styled.div``;
function Form() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function next() {
    if (currentIndex < pages_info.length - 1)
      return setCurrentIndex((currentIndex) => currentIndex + 1);
    return currentIndex;
  }

  function previous() {
    if (currentIndex > 0)
      return setCurrentIndex((currentIndex) => currentIndex - 1);
    return currentIndex;
  }

  return (
    <>
    <Navbar />

    
    <MainContainer>
      <div style={{width :"30%",border:"solid 1px red"}}>
        <VerticalStepper currentIndex={currentIndex} />
      </div>
      <div style={{width:"60%",border:"solid 1px red"}}>
        <FormContainer>Form Container</FormContainer>
        {currentIndex + 1} / {pages_info.length}
        <button onClick={next}>Next</button>
        <button onClick={previous}>Previous</button>
      </div>
    </MainContainer>
    </>
  );
}

export default Form;
