export function ToLocalDate({ data }) {
  return new Date(data.purchaseDate).toLocaleDateString();
}

//responsible for convert date to local date format.