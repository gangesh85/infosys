import "./App.css";
import { useEffect } from "react";
import Rewards from "./module/Rewards";
import Transaction from "./module/Transaction";
import UserCombine from "./module/UserCombine";
import { useLogger } from "./components/logger";

function App() {
  const {logs, logger} = useLogger()
  useEffect(() => {
    try {
      logger.info('App mounted')
    }catch(error) {
      logger.error(error.message)
    }    
  }, []);
  console.log(logs)  


  return (
    <>
      <UserCombine />
      <Rewards />
      <Transaction />
    </>
  );
}

export default App;
