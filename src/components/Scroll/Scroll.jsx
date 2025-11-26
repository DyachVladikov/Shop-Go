import classNames from "classnames"
import "./Scroll.scss"
import React, { useState, memo } from "react";
const Scroll = (props) => {

  const {min, max, onScrollChange} = props

    const [minPrice, setMinPrice] = useState(20);
    const [maxPrice, setMaxPrice] = useState(190);
    const maxRange = max;
    const minGap = min;
    

    const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    const isMin = e.target.id === "range-min";

    if (isMin) {
      if (value > maxPrice - minGap) {
        setMinPrice(maxPrice - minGap);
      } else {
        setMinPrice(value);
      }
    } else {
      if (value < minPrice + minGap) {
        setMaxPrice(minPrice + minGap);
      } else {
        setMaxPrice(value);
      }
    }
    onScrollChange(minPrice,maxPrice)
  };

  const trackStyle = {
    left: `${(minPrice / maxRange) * 100}%`,
    width: `${((maxPrice - minPrice) / maxRange) * 100}%`
  };

  return (
    <div className="price-section">
        <div className="range-slider">
          <div className="slider-track"></div>
          <div className="slider-track-active" style={trackStyle}></div>
          
          <input 
            type="range" 
            className="range-input" 
            id="range-min"
            min="0" 
            max={maxRange} 
            value={minPrice} 
            onChange={handleRangeChange}
          />
          <input 
            type="range" 
            className="range-input" 
            id="range-max"
            min="0" 
            max={maxRange} 
            value={maxPrice} 
            onChange={handleRangeChange}
          />
        </div>
        <div className="price-labels">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
  )
};

export default memo(Scroll)