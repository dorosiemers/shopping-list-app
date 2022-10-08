import React from "react";

function FetchData() {
  const request = async () => {
    const response = await fetch(
      "https://fetch-me.vercel.app/api/shopping/items"
    );
    const json = await response.json();
    console.log(json);
  };
  <div>{request()};</div>;
}

export default FetchData();
