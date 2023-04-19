import React, { useState, useRef, useContext } from "react";
import ShortageContext from "../../context/ShortageContext";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Input from "../Input/Input";
import { identifiedShortageEmail } from "../SendEmail/identifiedShortageEmail";

const AddNewShortage = ({ fetchShortages }) => {
  const { token } = useContext(AuthContext);
  const { setModalOpen } = useContext(ShortageContext);
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
    if (response.status === 201) {
      identifiedShortageEmail({ medicationName });
      await fetchShortages();
      setModalOpen(false);
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
