import { useState } from "react";
import "./App.css";
import AircallWidget from "./AirCallWidget"; // ojo con el nombre/case

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AircallWidget />  
    </>
  );
}

export default App;
