import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const colors = [
    "#ff0000",
    "#4f46e5",
    "#0ea5e9",
    "#10b981",
    "#f43f5e",
    "#f59e0b",
    "#64748b",
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Color Picker</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => {
              handleColorChange(color);
            }}
          ></div>
        ))}
      </div>
      <div className="custom-color-picker">
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default App;
