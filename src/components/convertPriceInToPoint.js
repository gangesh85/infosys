export function convertPriceInToPoint(data) {
  const price = data.price;
  let points = 0;
  if (price > 100) {
    points += 2 * (price - 100); // 2 points for every dollar over $100
    points += 1 * 50; // 1 point for every dollar between $50 and $100
  } else if (price > 50) {
    points += 1 * (price - 50); // 1 point for every dollar between $50 and price
  }
  return Math.floor(points);
}

// convert price into rewards.
