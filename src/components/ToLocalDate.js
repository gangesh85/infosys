export function ToLocalDate({ data }) {
  return new Date(data.purchaseDate).toLocaleDateString();
}
