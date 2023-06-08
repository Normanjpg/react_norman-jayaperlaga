import React from "react";

function convertCurrency(amount, fromCurrency, toCurrency) {
  let convertedAmount;
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => response.json())
    .then((data) => {
      convertedAmount = amount * data.rates[toCurrency];
      console.log(convertedAmount);
    });
}

convertCurrency(10, 'USD', 'IDR');

convertCurrency(50, "EUR", "USD");

convertCurrency(10, "GBP", "JPY");