export function TransactionYear({ data }) {
  return new Date(data.purchaseDate).getFullYear();
}

// responsible to extract year from data