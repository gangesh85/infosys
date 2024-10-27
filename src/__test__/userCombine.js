import { render, screen } from "@testing-library/react";
import UserCombine from "../module/UserCombine";

describe("Customer Data Tables", () => {
  test("render Monthly Transaction Table", () => {
    render(<UserCombine />);
    const loding = screen.getByText("Loading..");
    expect(loding).toBeInTheDocument();
  });
});
