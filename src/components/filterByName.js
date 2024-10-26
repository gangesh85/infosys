export function filterByName(userData) {
  const result = userData.reduce((acc, obj) => {
    if (!acc[obj.customerName]) {
      acc[obj.customerName] = { customerName: obj.customerName, price: 0 };
    }
    acc[obj.customerName].price += Math.floor(
      obj.price > 100
        ? (obj.price - 100) * 2 + 50
        : obj.price > 50
        ? obj.price - 50
        : 0
    );

    return acc;
  }, {});

  const aggregatedArray = Object.values(result);
  return aggregatedArray;
}

// filter data by name and aggregate their value
