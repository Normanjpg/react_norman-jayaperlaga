import React, { useState } from "react";

const ConvertCurrencyPages = () => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("JPY");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        const converted = amount * data.rates[toCurrency];
        setConvertedAmount(converted.toFixed(2));
      });
  };
  return (
    <div>
      <h1>convertCurrencyPages</h1>
      <form onSubmit={handleSubmit}>
        {/* Amount */}
      <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          data-testid="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        {/* Fromcurrency */}
        <label htmlFor="fromCurrency">From:</label>
        <select
          name="fromCurrency"
          id="fromCurrency"
          data-testid="fromCurrency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="IDR">IDR</option>
          <option value="GBP">GBP</option>
        </select>
        <br />
        {/* To currency */}
        <label htmlFor="toCurrency">To:</label>
        <select
          name="toCurrency"
          data-testid="toCurrency"
          id="toCurrency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="IDR">IDR</option>
          <option value="GBP">GBP</option>
        </select>
        <br />
        <button type="submit">Convert</button>
      </form>
      {convertedAmount && (
        <p data-testid="converted-result">
          {amount} {fromCurrency} = {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default ConvertCurrencyPages;
