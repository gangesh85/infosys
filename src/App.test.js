import { render, screen } from '@testing-library/react';
import Rewards from './module/Rewards'
import Transaction from './module/Transaction'
import UserCombine from './module/UserCombine'


describe("Customer Data Tables", () => {
  test("render All Transaction Table", () => {
    render(<Transaction />);    
    const loading = screen.getByText("Loading..");
    expect(loading).toBeInTheDocument();    
  });
  test("render Rewards Calculation Table", () => {
    render(<Rewards />)
    const loding = screen.getByText('Loading..')
      expect(loding).toBeInTheDocument()
  })
  test("render Monthly Transaction Table", () => {
    render(<UserCombine />)
    const loding = screen.getByText('Loading..')
      expect(loding).toBeInTheDocument()
  })
});
