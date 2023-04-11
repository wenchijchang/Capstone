import React, { useState, useContext, useEffect } from "react";
import ShortageContext from "../../context/ShortageContext";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Input from "../Input/Input";

const UpdateShortage = ({ fetchShortages }) => {
  const { token } = useContext(AuthContext);
  const { shortage, setModalOpen } = useContext(ShortageContext);
  const [date, setDate] = useState(shortage.date);
  const [medicationName, setMedicationName] = useState(
    shortage.medication_name
  );
  const [quantity, setQuantity] = useState(shortage.quantity);
  const [usageInLast30Days, setUsageInLast30Days] = useState(
    shortage.usage_in_last_30_days
  );
  const [remainingDaySupply, setRemainingDaySupply] = useState(
    shortage.remaining_day_supply
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    let updatedShortage = {
      date: date,
      medication_name: medicationName,
      quantity: quantity,
      usage_in_last_30_days: usageInLast30Days,
      remaining_day_supply: remainingDaySupply,
      is_confirmed: true,
    };
    try {
      let response = await axios.put(
        `http://127.0.0.1:8000/api/shortages/${shortage.id}/`,
        updatedShortage,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("Shortage Updated: ", response.data);
      if (response.status === 200) {
        await fetchShortages();
        setModalOpen(false);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <h3>Update A Shortage</h3>
        <Input
          className="form-control"
          label={"Date"}
          type={"date"}
          value={date}
          onChange={(event) => setDate(event.target.value)}
          style={{ marginBottom: "1em" }}
        />
        <Input
          className="form-control"
          label={"Quantity"}
          type={"number"}
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <Input
          className="form-control"
          label={"Usage In Last 30 Days"}
          type={"number"}
          value={usageInLast30Days}
          onChange={(event) => setUsageInLast30Days(event.target.value)}
        />
        <Input
          className="form-control"
          label={"Remaining Day Supply"}
          type={"number"}
          value={remainingDaySupply}
          onChange={(event) => setRemainingDaySupply(event.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateShortage;
