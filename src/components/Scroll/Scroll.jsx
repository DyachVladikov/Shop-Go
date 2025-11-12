import classNames from "classnames"
import "./Scroll.scss"
import React, { useState } from "react";
const Scroll = (props) => {

  const {min, max} = props
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(200);
  const gap = 150;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (maxValue - value >= gap) setMinValue(value);
    
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - minValue >= gap) setMaxValue(value);
  };

  const leftPercent = (minValue / max) * 100;
  const rightPercent = 100 - (maxValue / max) * 100;

  return (
    <div className="price-range-container">
      <div className="slider">
        <div
          className="progress"
          style={{ left: `${leftPercent}%`, right: `${rightPercent}%` }}
        ></div>
      </div>

      <div className="range-input">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="range-min"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-max"
        />
      </div>

      <div className="price-labels">
        <span style={{ left: `${leftPercent}%` }}>${minValue}</span>
        <span style={{  right: `${rightPercent}%` }}>${maxValue}</span>
      </div>
    </div>
  );
};

export default Scroll