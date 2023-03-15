import React, { useState } from "react";

const RandomNumber = () => {
    const [RandomNumber, setRandomNumber] = useState(null);

    const handleClick = () =>{
        const newRandomNumber = Math.floor(Math.random() * 500);
        setRandomNumber(newRandomNumber);
        console.log('Random Number:  ${newRandomNumber}')
    }
  return (
    <div className="text-center">
      <label htmlFor="generateNumber" className="form-label">
        <h5>
        Get Your Random Number here !
        </h5>
      </label>
      <br />
      <button 
      id="generateButton" 
      className="btn btn-primary"
      onClick={handleClick}>
        Generate
      </button>
      {RandomNumber && <p>Random Number: {RandomNumber} </p>}
    </div>
  );
};

export default RandomNumber;
