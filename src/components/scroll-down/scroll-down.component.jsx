import React from 'react'
import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  background:None;
  bottom: 1.6em;
  display: flex;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  
  
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`
const ScrollDown = () => {
    return (
        <MyScroll>
             <div className="turn">
        <span> &gt; </span>
      </div>
        </MyScroll>
    )
}

export default ScrollDown