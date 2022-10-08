import React, { useState } from "react";
import FetchData from "./FetchData";
import ProduceList from "./ProduceList";

export default function Searchbar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <Searchbar
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <ProduceList input={inputText} />
    </div>
  );
}
