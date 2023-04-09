import React, { useState, useEffect } from "react";
import axios from "axios";

import ShortageCard from "../ShortageCard/ShortageCard";

const DisplayShortages = ({ token }) => {
  const [shortages, setShortages] = useState([]);

  const fetchShortages = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/shortages/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log("API Response: ", response.data);
      setShortages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShortages();
  }, []);

  return (
    <div>
      {shortages.map((element) => (
        <ShortageCard shortage={element} />
      ))}
    </div>
  );
};

export default DisplayShortages;
