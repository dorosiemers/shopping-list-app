import React from "react";
import { useState, useEffect } from "react";

function FetchData() {
  const [fetchedData, setFetchedData] = useState();
  const [chosenItem, setChosenItem] = useState();

  useEffect(() => {
    fetchData();
    async function fetchData() {
      const url = "https://fetch-me.vercel.app/api/shopping/items";
      const response = await fetch(url);
      const result = await response.json();
      setFetchedData(result);
    }
  }, []);

  useEffect(() => {
    setChosenItem(
      fetchedData?.data?.map((item) => {
        return { id: item._id };
      })
    );
  }, [fetchedData]);
}

export default FetchData();
