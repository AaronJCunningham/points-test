import React, { useState } from "react";
import "./styles.css";
import Scene from "./three/Scene";

const App: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <div>
      <button className="start-button" onClick={() => setAnimate(!animate)}>
        {animate ? "Stop Animation" : "Start Animation"}
      </button>
      <Scene animate={animate} />
    </div>
  );
};

export default App;
