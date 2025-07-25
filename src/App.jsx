import { useState } from "react";
import "./App.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("#d4d4d4");
  const [appliedColor, setAppliedColor] = useState("#d4d4d4");
  const [loading, setLoading] = useState(false);
  const applyPaint = () => {
    setLoading(true);
    setAppliedColor(selectedColor);
    setTimeout(() => {
      // setLoading(false);
    }, 1000);
  };
  return (
    <>
      <h1>Kolparambil</h1>
      <p className="read-the-docs">Choose a color and apply</p>
      <div className="card">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="color-picker"
        />

        <button onClick={applyPaint} className="apply-button">
          Apply Paint
        </button>

        <div
          className="image-wrapper"
          style={{ borderColor: appliedColor, border: "1px solid" }}
        >
          {loading ? <div>Painting.. Please wait</div> : null}
          <img
            src={`https://res.cloudinary.com/reviewdepo/image/upload/e_gen_recolor:prompt_walls;to-color_${appliedColor.replace(
              "#",
              ""
            )};multiple_true/sittingrom_fsnbht`}
            alt="Sample"
            width={320}
            onLoad={() => setLoading(false)}
          />
        </div>

        <p className="color-code">Selected Color code: {appliedColor}</p>
      </div>
    </>
  );
}

export default App;
