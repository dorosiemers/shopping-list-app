import React from "react";
import FetchData from "./FetchData";

function ProduceList(props) {
  const filteredData = FetchData.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default ProduceList;
