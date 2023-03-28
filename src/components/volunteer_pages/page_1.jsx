import React from 'react'
import styled from 'styled-components'
import Navbar from "../landing_page/navbar"

const MainContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly
`;

const LeftContainer = styled.div`
display:flex;
flex-direction:column;
`;

const RightContainer = styled.div `
`;


function page_1  () {
  return (
    <div>
    <Navbar />

   
    <MainContainer >
    <LeftContainer>
    <button>button 1</button>
    <button>button 2</button>
    <button>button 3</button>
    <button>button 4</button>
    <button>button 5</button>


    </LeftContainer>
    <RightContainer>
    <div style={{display:"flex"}}>
      <div>
      <p>Step 1</p>
      <h4>Personal Info</h4>
      <hr style={{border:"solid 1px black"}}/>

      </div>
    </div>

    </RightContainer>
    


    </MainContainer>
    </div>
    
  )
}

export default page_1