import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import WhiteBuildings from "../../images/Whitebuildings.svg";
import Ellipse1 from "../../images/Ellipse31.svg";
import Ellipse2 from "../../images/Ellipse2.svg";
import Volbuilding from "../../images/vol-building2.svg";
import ReqBuilding from "../../images/req-building.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding: 2%;
`;

const TopContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  background-image: url(${WhiteBuildings}), url(${Ellipse1}), url(${Ellipse2});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: right, top left, top left;
`;

const MainHeading = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
`;
const MidContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2%;
`;

const VolunteerContainer = styled.div`
  width: 45%;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}),url(${Ellipse2}),url(${Volbuilding});
  background-repeat: no-repeat,no-repeat,no-repeat;
  background-position: top left, top left , right;
`;

const RequirementContainer = styled.div`
  width: 45%;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}),url(${Ellipse2}),url(${ReqBuilding});
  background-repeat: no-repeat,no-repeat,no-repeat;
  background-position: top left, top left,right;
`;

const DynamicContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShortlistContainer = styled.div`
  border: solid 1px red;
  width: 60%;
`;

const NotificationContainer = styled.div`
  border: solid 1px red;
  width: 40%;
`;

const Button = styled.button`
  background-image: linear-gradient(180deg, #FFB81C , #F0A500 );
  border-radius: 50px;
`;

export default function landing_page() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <TopContainer className="top-container">
          <p style={{ color: "black", display: "block" }}>Welcome, John Doe</p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1% 10%",
            }}
          >
            <MainHeading style={{ display: "inline-block" }}>
              Let's find your <b>Accommodation</b>
            </MainHeading>
            <Button
              className="btn"
              >
              See Available Accomodation
            </Button>
          </div>
        </TopContainer>
        <h3 style={{ margin: "2% 0" }}>
          Be a Volunteer and Help your ally in finding their accommodation
        </h3>
        <MidContainer>
          <VolunteerContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "black" }}>
                Help each other finding an accommodation <br />
                Participation is appreciated and is completely voluntary, with
                emphasis on privacy and security of an individual.
              </p>
              <Button className="btn">Be a Volunteer</Button>
            </div>
          </VolunteerContainer>
          <RequirementContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "black" }}>
                Find Your Accommodation is an online platform for CGI Community
                Post your requirement .
              </p>
              <Button className="btn">Post your Requirement</Button>
            </div>
          </RequirementContainer>
        </MidContainer>
        <DynamicContainer>
          <ShortlistContainer>This is Shorlist Container</ShortlistContainer>
          <NotificationContainer>
            This is NotificationContainer
          </NotificationContainer>
        </DynamicContainer>
      </MainContainer>
    </div>
  );
}
