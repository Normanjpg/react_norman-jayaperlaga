import React, { useState } from "react";

const RandomNumber = () => {
  const [isRandomNumber, setRandomNumber] = useState(null);

  const handleClick = () => {
    const newRandomNumber = Math.floor(Math.random() * 500);
    setRandomNumber(newRandomNumber);
    console.log("Random Number:  ${newRandomNumber}");
  };
  return (
    <div>
      <div className="mb-3 mt-3">
        <label htmlFor="generateNumber" className="form-label">
          <h5>Get Your Random Number here !</h5>
        </label>
        <br />
        <button
          id="generateButton"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Generate
        </button>
        {isRandomNumber && <p>Random Number: {isRandomNumber} </p>}
      </div>
    </div>
  );
};

export default RandomNumber;
