import "./App.css";
import { Parallax } from "react-parallax";

import landScape from "./img/snowy_peaks.jpg";
import forest from "./img/fog_forest.jpg";
import train from "./img/train_snow_landscape.jpg";
// import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Parallax strength={200} bgImage={landScape}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={1200} blur={{ min: -5, max: 5 }} bgImage={train}>
        <div className="content">
          <div className="text-content">Blur parallax</div>
        </div>
      </Parallax>

      <Parallax strength={-200} bgImage={forest}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
