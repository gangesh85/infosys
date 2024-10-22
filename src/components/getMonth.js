export const getMonth = (data) => {
  const dates = data.map((item) => new Date(item.purchaseDate));
  const maxDate = new Date(Math.max(...dates.map((date) => date.getTime())));
  const date = maxDate
  
  const latest = {
    monthIndex: date.getMonth() + 1,
    month: date.toLocaleString('default', { month: 'long' }),
    year: date.getFullYear()
  };
  
  date.setMonth(date.getMonth() - 1);
  const secondlatest = {
    monthIndex: date.getMonth() + 1,
    month: date.toLocaleString('default', { month: 'long' }),
    year: date.getFullYear()
  };
  
  date.setMonth(date.getMonth() - 1);
  const thirdlatest = {
    monthIndex: date.getMonth() + 1,
    month: date.toLocaleString('default', { month: 'long' }),
    year: date.getFullYear()
  };
  
  return {
    latest,
    secondlatest,
    thirdlatest,
  };
};
