export function PriceToPoint({ data }) {
  return Math.floor(
    Math.round(
      data.price > 100
        ? (data.price - 100) * 2 + 50
        : data.price > 50
        ? data.price - 50
        : 0
    )
  );
}
