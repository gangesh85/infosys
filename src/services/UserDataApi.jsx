import React from "react";

async function fetchData() {
  try {
    const response = await fetch("http://localhost:4000/userData");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error
  }
}

export default React.memo(fetchData)