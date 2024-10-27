import { render, screen } from "@testing-library/react";
import Rewards from "../module/Rewards";

describe("Customer Data Tables", () => {
  test("render Rewards Calculation Table", () => {
    render(<Rewards />);
    const loding = screen.getByText("Loading..");
    expect(loding).toBeInTheDocument();
  });
});
