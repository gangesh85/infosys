export const filterDataByMonth = (data, month, year) => {
  if (month < 1 || month > 12 || year < 0) {
    throw new Error("Invalid month or year");
  }

  return data.filter((item) => {
    const purchaseDate = new Date(item.purchaseDate);

    if (isNaN(purchaseDate.getTime())) {
      return false; // skip if purchaseDate is invalid
    }

    return (
      purchaseDate.getMonth() === month - 1 &&
      purchaseDate.getFullYear() === year
    );
  });
};

// filter data by specific date and month.
