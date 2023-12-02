import React, { useState } from "react";
import Navbarr from "./Navbarr";
import Headphone from "../images/Headphone.png";
import progress_bar2 from "../images/progress_bar2.png";
import Purple_Music_Tone from "../images/Purple_Music_Tone.png";
import SlideBar from "../Components.js/SlideBar";
import Balloon2 from "../images/Balloon2.png";

import { Col, Row } from "antd";

const Info = ()=> {
  const handleFormSubmit = async (formData) => {
    const { selectMood, selectGenre, setselectGender } = formData;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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", // Include your API key here
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', 
        script: `Wish a happy birthday to ${selectMood}. 
        Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. 
        The lyrics should use simple, short, and easy to pronounce words as much as possible.
        Using the above information, please write 16 lines of ${selectGenre} lyrics that I can dedicate to ${setselectGender} for ${setselectGender}  birthday. 
        Each line can have a maximum of 8 words or 40 characters.
        The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. 
        Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. 
        Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. 
        The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organization or any entity or individual in any manner whatsoever. 
        Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.`,
        max_tokens: 200, // Adjust as needed
      }),
    });

    const data = await response.json();
    console.log(data)
    if (data.choices && Array.isArray(data.choices) && data.choices.length > 0) {
        const generatedLyrics = data.choices[0].text.trim();
        // Update state or perform other actions with the generated lyrics
        console.log(generatedLyrics);
        return generatedLyrics;
      } else {
        console.error("Invalid response format from the API");
        return null; // or handle the error in an appropriate way
      }


  };
  return (
    <>
      <Navbarr />
      <br />
      <div className="Detail2_progress_bar2">
        <img src={progress_bar2} alt="Progress Bar" />
      </div>
      <br />
      <div style={{ padding: "0pc 40px" }}>
        <a
          style={{ color: "white", fontSize: "20px", fontFamily: "sans-serif" }}
        >
          What would you like their song's vibe to be?
        </a>
      </div>
      <br />
      <Row>
        <Col span={6}>
          <img
            style={{ width: "50%", paddingTop: "170px" }}
            src={Purple_Music_Tone}
          />
        </Col>
        <Col span={12}>
          <img style={{ maxWidth: "100%", height: "auto" }} src={Headphone} />
        </Col>
        <Col span={6}>
          <img style={{ maxWidth: "60%", height: "auto", paddingTop: "25px" }} src={Balloon2} />
        </Col>
      </Row>

      <SlideBar onSubmit={handleFormSubmit} />
      
  
    </>
  );
}

export default Info;
