import { convertPriceInToPoint } from "./convertPriceInToPoint";

export function filterDataByName(data) {
  const result = data.reduce((acc, obj) => {
    if (!acc[obj.customerName]) {
      acc[obj.customerName] = { customerName: obj.customerName, price: 0 };
    }

    acc[obj.customerName].price += convertPriceInToPoint(obj);

    return acc;
  }, {});

  const aggregatedArray = Object.values(result);
  return aggregatedArray;
}

// filter data by name and aggregate their value
