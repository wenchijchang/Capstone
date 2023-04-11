import React from "react";
import axios from "axios";

const DeleteShortage = ({ id, token, fetchShortages }) => {
  const handleClick = async (event) => {
    event.preventDefault();
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/shortages/${id}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      fetchShortages();
    }
    console.log("Delete Shortage: ", response.data);
    debugger;
  };
  return (
    <div style={{ textAlign: "right" }}>
      <button className="button" onClick={(e) => handleClick(e)}>
        Delete
      </button>
    </div>
  );
};
export default DeleteShortage;
