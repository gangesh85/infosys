import "./App.css";
import { useState, useEffect, createContext } from "react";
import Rewards from "./components/Rewards";
import Transaction from "./components/Transaction";
import { UserCombine } from "./components/UserCombine";

export const userDataContext = createContext(null);

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/userData")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error.message));
  },[userData]);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <userDataContext.Provider value={userData}>
      <UserCombine />
      <Rewards />
      <Transaction />
    </userDataContext.Provider>
  );
}

export default App;
