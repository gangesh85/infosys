export function TransactionYear({ data }) {
  return new Date(data.purchaseDate).getFullYear();
}
