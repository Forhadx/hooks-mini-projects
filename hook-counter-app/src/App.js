import React from "react";
import "./App.css";
import Result from "./components/Result";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="App">
      <h1>COUNTER APP</h1>
      <Result />
      <Inputs />
    </div>
  );
}

export default App;
