
import './App.css';
import Routers from './routes/routes';
import { useState } from "react";

function App() {
  const [change, setChange] = useState(true);
  
  const handleToggle = () => {
    if (change === "light") {
      setChange("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setChange("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <Routers/>
  );
}

export default App;
