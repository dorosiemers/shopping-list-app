import React from "react";
import FetchData from "./FetchData";

export default function ProduceList(props) {
  return (
    <ul>
      {FetchData.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}
