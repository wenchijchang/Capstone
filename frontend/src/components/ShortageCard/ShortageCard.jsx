import React, { useState, useContext } from "react";
import ShortageContext from "../../context/ShortageContext";
import { FcCheckmark } from "react-icons/fc";
import Modal from "../Modal/Modal";
import UpdateShortage from "../UpdateShortage/UpdateShortage";
import DeleteShortage from "../DeleteShortage/DeleteShortage";

const ShortageCard = ({ token, shortage, fetchShortages }) => {
  const { setShortage } = useContext(ShortageContext);

  return (
    <div>
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
      <div style={{ textAlign: "right" }}>
        <Modal setShortage={setShortage} shortage={shortage} text={"Update"}>
          <UpdateShortage fetchShortages={fetchShortages} />
        </Modal>
      </div>
      <DeleteShortage
        token={token}
        id={shortage.id}
        fetchShortages={fetchShortages}
      />
    </div>
  );
};

export default ShortageCard;
