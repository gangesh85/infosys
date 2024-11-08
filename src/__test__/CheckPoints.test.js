import { convertPriceInToPoint } from '../components/convertPriceInToPoint';

describe('convertPriceInToPoint', () => {
  test('returns 0 points for prices below or equal to $50', () => {
    expect(convertPriceInToPoint({ price: 50 })).toBe(0);
    expect(convertPriceInToPoint({ price: 49.99 })).toBe(0);
    expect(convertPriceInToPoint({ price: 0 })).toBe(0);
    expect(convertPriceInToPoint({ price: 30 })).toBe(0);
  });

  test('calculates points correctly for prices between $50 and $100', () => {
    expect(convertPriceInToPoint({ price: 51 })).toBe(1);
    expect(convertPriceInToPoint({ price: 75 })).toBe(25);
    expect(convertPriceInToPoint({ price: 99.99 })).toBe(49);
    expect(convertPriceInToPoint({ price: 100 })).toBe(50);
  });

  test('calculates points correctly for prices over $100', () => {
    expect(convertPriceInToPoint({ price: 101 })).toBe(52); // 50 points for $50-$100, 2 points for $101
    expect(convertPriceInToPoint({ price: 120 })).toBe(90); // 50 points for $50-$100, 40 points for $100-$120
    expect(convertPriceInToPoint({ price: 150 })).toBe(150); // 50 points for $50-$100, 100 points for $100-$150
    expect(convertPriceInToPoint({ price: 200 })).toBe(250); // 50 points for $50-$100, 200 points for $100-$200
  });

  test('calculates points accurately for very high prices', () => {
    expect(convertPriceInToPoint({ price: 1000 })).toBe(1850); // 50 points for $50-$100, 2*900 points for $100-$1000
    expect(convertPriceInToPoint({ price: 10000 })).toBe(19850); // 50 points for $50-$100, 2*9900 points for $100-$10000
  });

  test('returns integer points consistently', () => {
    expect(Number.isInteger(convertPriceInToPoint({ price: 75 }))).toBe(true);
    expect(Number.isInteger(convertPriceInToPoint({ price: 150.25 }))).toBe(true);
  });
});
