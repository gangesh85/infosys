export function sortDataByDate(userData) {
  const cloneUserData = [...userData];
  const dateSort = (a, b) => {
    const dateA = new Date(a.purchaseDate);
    const dateB = new Date(b.purchaseDate);
    return dateA - dateB;
  };
  return cloneUserData.sort(dateSort);  
}


// short data by date.