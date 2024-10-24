export function SortByDate(userData, sortedDate) {
  const cloneUserData = [...userData];
  const dateSort = (a, b) => {
    const dateA = new Date(a.purchaseDate);
    const dateB = new Date(b.purchaseDate);
    if (dateA > dateB) return 1;
    if (dateA < dateB) return -1;
    return 0;
  };
  return (sortedDate = cloneUserData.sort(dateSort));
}

// short data by date.