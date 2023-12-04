import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Info from "./Pages/Info";
import Detail from "./Pages/Detail";
import backgroundImage from "./images/BG.jpg";
import FinalPage from "./Pages/FinalPage";


function App() {
  const backgroundImageUrl = `url(${backgroundImage})`;

  const containerStylee = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    minHeight: "100vh",
    overflowY: "auto",
    overflowX: "auto",
  };
  return (
    <div className="App" style={containerStylee}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/info" element={<Info />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/final" element={<FinalPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
