import React from 'react';
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
const MyTitleMessage = styled.h1`
  position: absolute;
  background:none;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: 0px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 0px 0px rgb(254, 255, 254);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
      color:rgb(30, 226, 226);
    }
    .sub {
      font-size: 27px;
      color:rgb(30, 226, 226);
      letter-spacing: 2px;
    }
  }
`;


      const TitleMessage = () => (
        <MyTitleMessage>
          <div className="titleMessage">
            <div className="heading">
              <div className="main text-center mb-3">
                Hey.., I am
                <br />
                <span>
                  <strong>Bhavana</strong>
                  </span>
                
              </div>
              <div className="sub">
                <Typewriter
                  options={{
                    strings: ["Learner"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                  }}
                />
              </div>
            </div>
          </div>
        </MyTitleMessage>
      );
export default TitleMessage