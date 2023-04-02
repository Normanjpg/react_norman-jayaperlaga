import { render } from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { ...options });

export * from "@testing-library/react";

export { customRender as render };