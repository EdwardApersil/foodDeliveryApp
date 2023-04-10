import React from 'react';
import { GrAppleAppStore } from "react-icons/gr";
import { GrGooglePlay } from "react-icons/gr";
import App from "../images/app.png";

const Download = () => {

    const img = {
        width: "350px",
        // height: "400px"
    }

    const background = {
        backgroundColor: "white",
        padding: "4rem",
        borderRadius: "4px",
    }

    const icon = {
        fontSize: "45px",
        marginTop: "10px",
        marginRight: "15px",
    };

    const style = {
        border: "1px solid green",
        padding: "6px",
        borderRadius: "20px",
        width: "200px",
    }

  return (
    <>
        <div className="download" style={background}>
            <div className="download-content">
                <h2>Get the app & get your food from home</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus maiores odit consequuntur molestias inventore dolor veniam dolorum!</p>
                <div className="down-store">
                <div className="store" style={style}>
                  {<GrAppleAppStore style={icon}/>} <h5>App Store</h5>
                </div>
                <div className="store" style={style}>
                  {<GrGooglePlay style={icon}/>} <h5>Play Store</h5>
                </div>
                </div>
            </div>

            <div className="img">
                <img src={App} alt="phone" style={img}/>
            </div>
        </div>
    </>
  )
}

export default Download