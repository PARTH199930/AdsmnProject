import React, { useState } from "react";
import Navbarr from "./Navbarr";
import progress_bar1 from "../images/progress_bar1.png";
import Asset_1 from "../images/Asset_1.png";
import Cap_Gift from "../images/Cap_Gift.png"
import Balloon from "../images/Balloon.png"

import "./Registration.css";
import { useNavigate } from "react-router";
import { Col, Row } from "antd";

export default function Detail() {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const navigate = useNavigate();

  const genderOptions = ["Male", "Female", "Other"];

  const ageOptions = Array.from({ length: 100 }, (_, index) => index + 1);

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(true); // Reset validation when the user types in the name field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Validate required fields
    if (!selectedAge || !selectedGender || !name.trim()) {
      // Mark fields as invalid to show validation messages
      setIsNameValid(!!name.trim());
      alert("Please fill in all required fields.");
      return;
    }

    // Continue with form submission or other actions
    console.log("Form submitted:", name, selectedAge, selectedGender);
    navigate("/Info");
  };

  return (
    <>
      <Navbarr />
      <br/>
      <div className="RegisterElements">
        <img className="progress-bar" src={progress_bar1} alt="Progress Bar" />
      </div>
      <br/>

      <Row style={{alignItems:"center"}}>
      <Col span={6}>
        <img
          style={{ width: "30%",display:"grid" }}
          src={Asset_1}
        />
      </Col>
      <Col span={12}>
        <img style={{ maxWidth: "100%", height: "auto" }} src={Cap_Gift} />
      </Col>
      <Col span={6}>
        <img style={{ maxWidth: "50%", height: "auto", paddingTop: "25px" }} src={Balloon} />
      </Col>
    </Row>

      <form className="DisplayForm" onSubmit={handleSubmit}>
        <div className="DisplayFormDesign">
          <a>Their name</a>
          <input type="text" placeholder="XXXXXXXXXX"  value={name} onChange={handleNameChange} className={!isNameValid ? "invalid-field" : ""} />

          {!isNameValid && (
            <p className="validation-message">Please enter a valid name.</p>
          )}

          <a>How old they'll be this birthday</a>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age} Years
              </option>
            ))}
          </select>
          <a>Gender</a>
          <select value={selectedGender} onChange={handleGenderChange} className={!selectedGender ? "invalid-field" : ""} >
            <option value="" disabled>
              Select gender
            </option>
            {genderOptions.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        <div className="GlobalButton" style={{ marginTop: "11px" }}>
          <button className="RegisterButton">Proceed</button>
        </div>
      </form>
    </>
  );
}
