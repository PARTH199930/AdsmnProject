import React, { useState } from "react";
import progress_bar from "../images/progress_bar.png";
import Celebrations_Bg from "../images/Celebrations_Bg.png";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import Navbarr from "./Navbarr";
import OTPPopup from "../OTPPopup";

export default function Registration() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [acceptsTerms, setAcceptsTerms] = useState(false);
  const [receivesPromotions, setReceivesPromotions] = useState(false);
  const [showOTPPopup, setShowOTPPopup] = useState(false); // State for controlling OTP popup visibility
  const [phoneNumberError, setPhoneNumberError] = useState(""); // State for phone number validation error
  const [emailError, setEmailError] = useState("");

  const handleOTPPopupClose = () => {
    setShowOTPPopup(false);
  };

  const handlePhoneNumberBlur = () => {
    // Validate phone number format (10 digits) on blur
    if (!/^\d{10}$/.test(phone)) {
      setPhoneNumberError(alert("Please enter a valid 10-digit phone number."));
    } else {
      setPhoneNumberError("");
    }
  };

  const handleEmailBlur = () => {
    // Validate email format on blur
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      setPhoneNumberError(alert("Please enter a valid 10-digit phone number."));
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Clear any previous validation errors
    setPhoneNumberError("");
    setEmailError("");

    console.log(
      "Form submitted:",
      name,
      phone,
      email,
      acceptsTerms,
      receivesPromotions
    );

    setShowOTPPopup(true);
  };

  return (
    <>
      <Navbarr />
      <br />
      <div className="RegisterElements">
        <img className="progress-bar" src={progress_bar} alt="Progress Bar" />
        <img
          className="celebrations-bg"
          src={Celebrations_Bg}
          style={{ marginTop: "-50px" }}
          alt="BG"
        />
        <h4 className="register-text">Register to create</h4>
      </div>

      <form className="FormInputs" onSubmit={handleSubmit}>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={handlePhoneNumberBlur}
          placeholder="Phone Number"
          required
        />

        {phoneNumberError && (
          <p className="error-message">{phoneNumberError}</p>
        )}

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          onBlur={handleEmailBlur}
          required
        />

        {emailError && <p className="error-message">{emailError}</p>}

        <div className="radio-group">
          <div className="radio-item">
            <input
              type="radio"
              id="terms"
              name="acceptsTerms"
              required
              onChange={() => setAcceptsTerms(!acceptsTerms)}
            />
            <label htmlFor="terms">
              I accept Terms & Condition and Privacy Policy of Mondelez
              (Cadbury)
            </label>
          </div>

          <br/>
          
          <div className="radio-item">
            <input
              type="radio"
              id="promotional"
              name="receivesPromotions"
              required
              onChange={() => setReceivesPromotions(!receivesPromotions)}
            />
            <label htmlFor="promotional">
              I would like to receive promotional communication from Mondelez
              (Cadbury) about its product and offers.
            </label>
          </div>
        </div>

        <br />

        <div className="GlobalButton">
          <button className="RegisterButton">Submit</button>
        </div>
      </form>

      {/* Render OTPPopup component if showOTPPopup is true */}
      {showOTPPopup && <OTPPopup onClose={handleOTPPopupClose} />}
    </>
  );
}
