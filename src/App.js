import React from "react";
import "./Modal"
import "./App.css";
import {MdAccountCircle} from "react-icons/md";
import {MdMessage} from "react-icons/md";
import {RiHomeSmileFill, RiPieChartFill} from "react-icons/ri";
import {IconContext} from "react-icons";

const App = () => {

  return (
    <IconContext.Provider value={{color:"blue", size: "24px"}}>
    <div className="app">
      <h1>Hello World</h1>

      <div className="sign">
        <MdAccountCircle style={{color:"white"}}/>
        Sign In
        </div>

        <div className="sign2">
        <RiHomeSmileFill/>
        <p>I specialize in React.js</p>
        </div>

        <div className="sign2">
        <RiPieChartFill/>
        <p>Check out my portfolio on Github</p>
        </div>

        <div className="sign2">
        <MdMessage/>
        <p>Send me a message</p>
        </div>

        <div className="sign2">
        <RiHomeSmileFill/>
        <p>I specialize in React.js</p>
        </div>

        <div className="sign2">
        <RiPieChartFill/>
        <p>Check out my portfolio on Github</p>
        </div>

        <div className="sign2">
        <MdMessage/>
        <p>Send me a message</p>
        </div>

      </div>
      </IconContext.Provider>

  );

}

export default App;