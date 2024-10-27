import { render, screen } from '@testing-library/react';
import { PriceToPoint } from '../component/priceToPoint';

describe('PriceToPoint', () => {
  it('calculates price correctly for price > 100', () => {
    render(<PriceToPoint data={{ price: 150 }} />);
    expect(screen.getByText('150')).toBeInTheDocument(); // (150 - 100) * 2 + 50 = 100
  });

  it('calculates price correctly for 50 < price <= 100', () => {
    render(<PriceToPoint data={{ price: 75 }} />);
    expect(screen.getByText('25')).toBeInTheDocument(); // 75 - 50 = 25
  });

  it('returns 0 for price <= 50', () => {
    render(<PriceToPoint data={{ price: 50 }} />);
    expect(screen.getByText('0')).toBeInTheDocument(); // price is 50, so return 0
  });

  it('returns 0 for price < 0', () => {
    render(<PriceToPoint data={{ price: -10 }} />);
    expect(screen.getByText('0')).toBeInTheDocument(); // price is negative, so return 0
  });
});