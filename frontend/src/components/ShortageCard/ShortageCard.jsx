import React from "react";
import { FcCheckmark } from "react-icons/fc";

const ShortageCard = ({ shortage }) => {
  return (
    <li
      style={{
        listStyle: "none",
        marginBottom: "4em",
      }}
    >
      <table style={{ textAlign: "center", margin: "0 auto" }}>
        <tr style={{ textAlign: "center", margin: "0 auto" }}>
          <th>Date</th>
          <th>Medication Name</th>
          <th>Quantity</th>
          <th>Usage In Last 30 Days</th>
          <th>Remaining Day Supply</th>
          <th>Identified</th>
          <th>Confirmed</th>
          <th>Documented By</th>
        </tr>
        <tr>
          <td>{shortage.date}</td>
          <td>{shortage.medication_name}</td>
          <td>{shortage.quantity}</td>
          <td>{shortage.usage_in_last_30_days}</td>
          <td>{shortage.remaining_day_supply}</td>
          <td>{shortage.is_identified && <FcCheckmark />}</td>
          <td>{shortage.is_confirmed && <FcCheckmark />}</td>
          <td>
            {shortage.documented_by.first_name + " "}
            {shortage.documented_by.last_name}
          </td>
        </tr>
      </table>
    </li>
  );
};

export default ShortageCard;
