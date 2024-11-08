export const getMonthYear = (data) => {
  const dates = data.map((item) => new Date(item.purchaseDate));
  const maxDate = new Date(Math.max(...dates.map((date) => date.getTime())));

  const getMonthYearObject = (date, offset) => {
    const newDate = new Date(date); // create a copy of the date
    newDate.setMonth(date.getMonth() - offset); // adjust by offset months
    return {
      monthIndex: newDate.getMonth() + 1,
      month: newDate.toLocaleString('default', { month: 'long' }),
      year: newDate.getFullYear()
    };
  };

  return {
    latest: getMonthYearObject(maxDate, 0),
    secondlatest: getMonthYearObject(maxDate, 1),
    thirdlatest: getMonthYearObject(maxDate, 2),
  };
};
