import React, { useState } from "react";
import Calm from "../images/Calm.png";
import Funny from "../images/Funny.png";
import Happy from "../images/Happy.png";
import Motivational from "../images/Motivational.png";
import Romantic from "../images/Romantic.png";
import Desi from "../images/Desi.png";
import Desi_ from "../images/Desi_.png";
import Rap from "../images/Rap.png";
import EDM from "../images/EDM.png";
import Pop from "../images/Pop.png";
import MAle from "../images/MAle.png";
import Female from "../images/Female.png";
import "../Pages/Registration.css";
import FinalPage from "../Pages/FinalPage";


const SlideBar = ({ onSubmit }) => {
  const [selectMood, setselectMood] = useState(null);
  const [selectGenre, setselectGenre] = useState(null);
  const [selectGender, setselectGender] = useState(null);
  const [generatedLyrics, setGeneratedLyrics] = useState("");
 


  const TagImg = ({ src, alt, plugin, category, onClick }) => {
    const isSelected =
      (category === "Mood" && selectMood === plugin) ||
      (category === "Genre" && selectGenre === plugin) ||
      (category === "Gender" && selectGender === plugin);
    return (
      <div
        className={`tag-img-container ${isSelected ? "selected" : ""}`}
        onClick={() => onClick(category, plugin)}
      >
        <img src={src} alt={alt} />
      </div>
    );
  };

  const handleMood = (plugin) => {
    {
        console.log(plugin);
      }
    setselectMood(plugin);
  };

  const handleGenre = (plugin) => {
    {
      console.log(plugin);
    }
    setselectGenre(plugin);
  };

  const handleGender = (plugin) => {
    {
        console.log(plugin);
      }
    setselectGender(plugin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const lyrics = await onSubmit({ selectMood, selectGenre, selectGender });

    console.log("Selected Mood:", selectMood);
    console.log("Selected Genre:", selectGenre);
    console.log("Selected Gender:", selectGender);

    setGeneratedLyrics(lyrics);
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: "20px", borderRadius: "10px 10px 0px 0px" }}>
          <div
            style={{
              border: "1px solid #E3B66D",
              padding: ".7em",
              backgroundColor: "#E3B66D",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <a style={{ color: "#36007A", fontWeight: "bold" }}>Mood</a>
          </div>

          <div
            style={{
              border: "1px solid #E3B66D",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <div className="MoodsImages" style={{ padding: ".7em" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <TagImg
                  src={Funny}
                  alt="Funny"
                  plugin="Funny"
                  onClick={() => handleMood("Funny")}
                />
                <TagImg
                  src={Calm}
                  alt="Calm"
                  plugin="Calm"
                  onClick={() => handleMood("Calm")}
                />
                <TagImg
                  src={Happy}
                  alt="Happy"
                  plugin="Happy"
                  onClick={() => handleMood("Happy")}
                />
                <TagImg
                  src={Motivational}
                  alt="Motivational"
                  plugin="Motivational"
                  onClick={() => handleMood("Motivational")}
                />
                <TagImg
                  src={Romantic}
                  alt="Romantic"
                  plugin="Romantic"
                  onClick={() => handleMood("Romantic")}
                />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div style={{ margin: "20px", borderRadius: "10px 10px 0px 0px" }}>
          <div
            style={{
              border: "1px solid #E3B66D",
              padding: ".7em",
              backgroundColor: "#E3B66D",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <a style={{ color: "#36007A", fontWeight: "bold" }}>Genre</a>
          </div>

          <div
            style={{
              border: "1px solid #E3B66D",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <div className="MoodsImages" style={{ padding: ".7em" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <TagImg
                  src={Desi}
                  alt="Desi"
                  plugin="Desi"
                  onClick={() => handleGenre("Desi")}
                />
                <TagImg
                  src={Desi_}
                  alt="Desi_"
                  plugin="Desi_"
                  onClick={() => handleGenre("Desi_")}
                />
                <TagImg
                  src={Rap}
                  alt="Rap"
                  plugin="Rap"
                  onClick={() => handleGenre("Rap")}
                />
                <TagImg
                  src={Pop}
                  alt="Pop"
                  plugin="Pop"
                  onClick={() => handleGenre("Pop")}
                />
                <TagImg
                  src={EDM}
                  alt="EDM"
                  plugin="EDM"
                  onClick={() => handleGenre("EDM")}
                />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div style={{ margin: "20px", borderRadius: "10px 10px 0px 0px" }}>
          <div
            style={{
              border: "1px solid #E3B66D",
              padding: ".7em",
              backgroundColor: "#E3B66D",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <a style={{ color: "#36007A", fontWeight: "bold" }}>
              Singer's Voice
            </a>
          </div>

          <div
            style={{
              border: "1px solid #E3B66D",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <div className="MoodsImages" style={{ padding: ".7em" }}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <TagImg
                  src={MAle}
                  alt="MAle"
                  plugin="his"
                  onClick={() => handleGender("his")}
                />
                <TagImg
                  src={Female}
                  alt="Female"
                  plugin="her"
                  onClick={() => handleGender("her")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="GlobalButton">
          <button className="RegisterButton">Submit</button>
        </div>
      </form>

      {generatedLyrics && (
        <div>
          {generatedLyrics}
        </div> 
      )}

      
    </>
  );
};

export default SlideBar;
