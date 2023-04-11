import React, { useState, useEffect } from "react";
import axios from "axios";

import ShortageCard from "../ShortageCard/ShortageCard";
import AddNewShortage from "../AddShortage/AddShortage";
import Modal from "../Modal/Modal";

const DisplayShortages = ({ token }) => {
  const [shortages, setShortages] = useState([]);

  const fetchShortages = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/shortages/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      //   debugger;
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
      <div style={{ textAlign: "right" }}>
        <Modal
          key={"main-add-modal"}
          text={"Add New Shortage"}
          unique={"main-add-modal"}
        >
          <AddNewShortage token={token} fetchShortages={fetchShortages} />
        </Modal>
      </div>
      {shortages.map((shortage) => (
        <ShortageCard
          token={token}
          key={shortage.id}
          shortage={shortage}
          fetchShortages={fetchShortages}
        />
      ))}
    </div>
  );
};

export default DisplayShortages;
