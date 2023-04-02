import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ConvertCurrencyPages from "./ConvertCurrencyPages";

test("should convert currency", async () => {
  const { getByLabelText, getByText, getByTestId } = render(
    <ConvertCurrencyPages />
  );

  const input = getByTestId("amount");
  fireEvent.change(input, { target: { value: "100" } });

  const fromCurrency = getByTestId("fromCurrency");
  fireEvent.change(fromCurrency, { target: { value: "USD" } });

  const toCurrency = getByTestId("toCurrency");
  fireEvent.change(toCurrency, { target: { value: "EUR" } });

  const submitButton = getByText("Convert");
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByTestId("converted-result")).toHaveTextContent(parseFloat("92.10"));
  });
});
