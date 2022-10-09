import "./App.css";
import React, { useState, useEffect } from "react";
import { ListItem, TextField } from "@mui/material";
import Fuse from "fuse.js";
import Searchbar from "./components/Searchbar";

const LOCAL_STORAGE_KEY = "item-storage";

const fuse = new Fuse(ListItem, {
  keys: ["name"],
  includeScore: true,
});
const results = fuse.search("");

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItem) setInputText(storedItem);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(inputText));
  }, [inputText]);

  return (
    <div className="main">
      <h1>Shopping List App</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Searchbar input={inputText} />
      <Fuse />
    </div>
  );
}

export default App;
