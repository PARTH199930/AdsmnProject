import React from "react";
import Navbarr from "./Navbarr";
import progress_bar4 from "../images/progress_bar4.png";


export default function FinalPage(props) {

  console.log(props.lyc);
  return (
    <div>
      <Navbarr />
      <br />
      <div className="RegisterElements">
        <img src={progress_bar4} alt="Progress Bar" className="progress-bar" />
      </div>
      <br />
      <div style={{ padding: "0pc 40px" }}>
        <a
          style={{
            color: "white",
            fontSize: "20px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Your song's lyrics are ready
        </a>
      </div>
      <br />
      <div>
    
      </div>
    </div>
  );
}
