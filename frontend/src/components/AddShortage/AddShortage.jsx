import React, { useState, useRef } from "react";
import axios from "axios";
import Input from "../Input/Input";

const AddNewShortage = ({ token, fetchShortages }) => {
  const shortageForm = useRef();
  const [date, setDate] = useState("");
  const [medicationName, setMedicationName] = useState("");
  // const [quantity, setQuantity] = useState("")
  // const [usageInLast30Days, setUsageInLast30Days] = useState("")
  // const [remainingDaySupply, setRemainingDaySupply] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newShortage = {
      date: date,
      medication_name: medicationName,
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/shortages/",
      newShortage,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("New Shortage Added: ", response.data);
    debugger;
    if (response.status === 201) {
      await fetchShortages();
    }
    shortageForm.current.reset();
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit} ref={shortageForm}>
        <h3>Add New Shortage</h3>
        <Input
          className="form-control"
          label={"Date"}
          type={"date"}
          onChange={(event) => setDate(event.target.value)}
          style={{ marginBottom: "1em" }}
        />
        <Input
          className="form-control"
          label={"Medication Name"}
          type={"text"}
          onChange={(event) => setMedicationName(event.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewShortage;
