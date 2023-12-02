import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./OTPPopup.css";

const OTPPopup = ({ onClose }) => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const hardcodedOTP = "1234";
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    // Ensure the value is a single digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
    }
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join('');
    console.log("Entered OTP:", enteredOTP);
    if (enteredOTP === hardcodedOTP) {
      console.log("OTP verification successful!");
      onClose();
      navigate("/Detail");
    } else {
      console.log("Incorrect OTP. Please try again.");
      setOTP(["", "", "", ""]);
    }
  };

  return (
    <div className="otp-overlay">
      <div className="otp-popup">
        <div className="otp-popup-content">
          <h2 style={{ color: "#411479" }}>Enter OTP</h2>
          <form onSubmit={handleSubmitOTP}>
            <div className="OTP-GAP">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="number"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="otp-box"
                  maxLength="1"
                />
              ))}
            </div>

            <div className="OTPButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPPopup;
