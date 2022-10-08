import "./App.css";
import React, { useState } from "react";
import ProduceList from "./components/ProduceList";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <Searchbar />
      <ProduceList />
    </div>
  );
}

export default App;
