import React, { useState } from "react";
import styled from "styled-components";
import pages_info from "./pagesInfo";
import "./verticalStepper.css";
import requirementInfo from "./requirementInfo.js";

const MainContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StepContainer = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  width: 80%;
  margin-top: 5%;
`;

const Title = styled.h4`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Description = styled.p`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;

function VerticalStepper({ currentIndex }) {
  const stepsList = pages_info.map((currentStep) => (
    <StepContainer
      key={currentStep.step}
      className={currentStep.step == currentIndex + 1 ? "active" : ""}
    >
      <div style={{ margin: "3% 4%" }}>
        <Title>
          Step {currentStep.step}. {currentStep.title}
        </Title>
        <Description style={{ color: "black" }}>
          {currentStep.description}
        </Description>
      </div>
    </StepContainer>
  ));

  const requirmentList = requirementInfo.map((currentStep) => (
    <StepContainer
      key={currentStep.step}
      className={currentStep.step == currentIndex + 1 ? "active" : ""}
    >
      <div style={{ margin: "3% 4%" }}>
        <Title>
          Step {currentStep.step}. {currentStep.title}
        </Title>
        <Description style={{ color: "black" }}>
          {currentStep.description}
        </Description>
      </div>
    </StepContainer>
  ));
  return (
    <MainContainer>
      <div style={{ textAlign: "left", position: "relative", right: "5%" }}>
        <h4>Let's help each other to </h4>
        <h3>Find Accomodation</h3>
      </div>

     {stepsList}
    </MainContainer>
  );
}

export default VerticalStepper;
