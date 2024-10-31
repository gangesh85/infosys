// PriceToPoint.test.js
import { PriceToPoint } from "../components/PriceToPoint";

describe('PriceToPoint', () => {
  it('calculates price correctly for price > 100', () => {
    const result = PriceToPoint({ data: { price: 150 } });
    expect(result).toBe(150); // (150 - 100) * 2 + 50 = 150
  });

  it('calculates price correctly for 50 < price <= 100', () => {
    const result = PriceToPoint({ data: { price: 75 } });
    expect(result).toBe(25); // 75 - 50 = 25
  });

  it('returns 0 for price <= 50', () => {
    const result = PriceToPoint({ data: { price: 50 } });
    expect(result).toBe(0); // price is 50, so return 0
  });

  it('returns 0 for price < 0', () => {
    const result = PriceToPoint({ data: { price: -10 } });
    expect(result).toBe(0); // price is negative, so return 0
  });
});
