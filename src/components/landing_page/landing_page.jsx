import React from "react";
import Navbar from "./navbar";
import styled from "styled-components";
import WhiteBuildings from "../../images/Whitebuildings.svg";
import Ellipse1 from "../../images/Ellipse31.svg";
import Ellipse2 from "../../images/Ellipse2.svg";
import Volbuilding from "../../images/vol-building2.svg";
import ReqBuilding from "../../images/req-building.svg";
import Cupboard from "../../images/cupboard.svg";
import Mail from "../../images/mail.svg";

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
  padding-left: 4%;
  background-image: url(${WhiteBuildings}), url(${Ellipse1}), url(${Ellipse2});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: right bottom, top left, top left;
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
  justify-content: space-between;
  margin-bottom: 2%;
`;

const VolunteerContainer = styled.div`
  width: 45%;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}), url(${Ellipse2}), url(${Volbuilding});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, top left, right bottom;
  padding-left: 4%;
`;

const RequirementContainer = styled.div`
  width: 45%;
  box-shadow: 0px 4px 10px rgba(46, 72, 87, 0.18);
  border-radius: 8px;
  background-image: url(${Ellipse1}), url(${Ellipse2}), url(${ReqBuilding});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top left, top left, right bottom;
  padding-left: 4%;
`;

const DynamicContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShortlistContainer = styled.div`
  width: 55%;
  margin-right: 4%;
`;

const NotificationContainer = styled.div`
 
  width: 40%;
`;

const Button = styled.button`
  background-image: linear-gradient(180deg, #ffb81c, #f0a500);
  border-radius: 50px;
`;

export default function landing_page() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <TopContainer className="top-container">
          <p style={{ color: "black", display: "block", marginTop: "4%" }}>
            Welcome, John Doe
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1% 10%",
            }}
          >
            <MainHeading
              style={{ display: "inline-block", marginLeft: "-13%" }}
            >
              Let's find your <b>Accommodation</b>
            </MainHeading>
            <Button className="btn" style={{ height: "fit-content" }}>
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
                alignItems: "flex-start",
                marginBottom: "6%",
              }}
            >
              <p style={{ color: "black", marginTop: "9%" }}>
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
                alignItems: "flex-start",
              }}
            >
              <p style={{ color: "black", marginTop: "9%" }}>
                Find Your Accommodation is an online platform for CGI Community
                Post your requirement .
              </p>
              <Button className="btn" style={{ marginTop: "3%" }}>
                Post your Requirement
              </Button>
            </div>
          </RequirementContainer>
        </MidContainer>
        <DynamicContainer>
          <ShortlistContainer>
            <p style={{ color: "black" }}>Shortlisted By You</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0px 4px 10px rgba(66, 76, 97, 0.15)",
                borderRadius: "8px",
              }}
            >
              <img src={Cupboard}></img>
              <p style={{ color: "black" }}>
                You don't have any shortlisting yet!
              </p>
              <p style={{ color: "black" }}>
                Take your time to find the perfect accommodation your ideal
                space is just a few clicks away.
              </p>
            </div>
          </ShortlistContainer>
          <NotificationContainer>
            <p style={{ color: "black" }}>Notification</p>
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0px 4px 10px rgba(66, 76, 97, 0.15)",
                borderRadius: "8px",
              }}>
              <img src={Mail} />
              <p style={{ color: "black" }}>No Notifications Right Now!</p>
              <p style={{ color: "black" }}>
                We'll notify you when something arrives.
              </p>
            </div>
          </NotificationContainer>
        </DynamicContainer>
      </MainContainer>
    </div>
  );
}
