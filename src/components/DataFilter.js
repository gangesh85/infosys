import { useState, useEffect, useContext } from "react";
import { userDataContext } from "../App";

export function DataFilter() {
  const userData = useContext(userDataContext);
  const [uniqueData, setUniqueData] = useState([]);

  useEffect(() => {
    const aggregatedData = {};

    userData.map((item) => {
      if (aggregatedData[item.customerName]) {
        aggregatedData[item.customerName].price += item.price
      } else {
        aggregatedData[item.customerName] = { ...item };
      }
    });

    const uniqueDataArray = Object.values(aggregatedData);
    setUniqueData(uniqueDataArray);
  }, []);

  return uniqueData;
}
