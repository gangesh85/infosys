import "./App.css";
import { useEffect } from "react";
import { useLogger } from "./components/logger";
import CombineUsers from "./module/CombineUsers";
import TotalRewards from "./module/TotalRewards";
import AllTransaction from "./module/AllTransaction";

function App() {
  const { logs, logger } = useLogger();
  useEffect(() => {
    try {
      logger.info("App mounted");
    } catch (error) {
      logger.error(error.message);
    }
  }, []);
  
  console.log(logs);

  return (
    <>
      <CombineUsers />
      <TotalRewards />
      <AllTransaction />
    </>
  );
}

export default App;
