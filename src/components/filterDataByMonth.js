export const filterDataByMonth = (data, month, year) => {
  return data.filter((item) => {
    const purchaseDate = new Date(item.purchaseDate);
    return (
      purchaseDate.getMonth() === month - 1 &&
      purchaseDate.getFullYear() === year
    );
  });
};
