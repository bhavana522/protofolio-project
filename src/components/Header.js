import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
          <div className="main-info">
              <h2>Hey...., I Am</h2>
              <h1><strong>BHAVANA</strong></h1>
                 
          <Typed
                 className = "typed-text"
                 strings={["Learner"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop

                />

          </div>
           
        </div>
    )
}

export default Header
