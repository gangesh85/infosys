import { render, screen } from "@testing-library/react";
import Transaction from "../module/Transaction";

describe("Customer Data Tables", () => {
  test("render All Transaction Table", () => {
    render(<Transaction />);
    const loading = screen.getByText("Loading..");
    expect(loading).toBeInTheDocument();
  });
});
