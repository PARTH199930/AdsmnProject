import React, { useEffect } from "react";
import Celebrations from "../images/Celebrations.png";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the register page after 3 seconds
      navigate('/registration');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Home_Div">
      <img src={Celebrations} alt="Celebrations" className="centered-image" />
      <div className="Fontclass">
        A Unique birthday Celebrations for everyone
      </div>
      <div className="Fontclass1">
        इस birthday, कुछ अच्छा हो जाए कुछ मीठा हो जाए
      </div>
    </div>
  );
}
export default Home;
