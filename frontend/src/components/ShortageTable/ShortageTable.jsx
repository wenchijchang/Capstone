import React, { useState, useContext } from "react";
import ShortageContext from "../../context/ShortageContext";
import AuthContext from "../../context/AuthContext";
import { FcCheckmark } from "react-icons/fc";
import Modal from "../Modal/Modal";
import UpdateShortage from "../UpdateShortage/UpdateShortage";
import DeleteShortage from "../DeleteShortage/DeleteShortage";
import "./ShortageTable.css";

const ShortageTable = ({ shortages, fetchShortages }) => {
  const { setShortage } = useContext(ShortageContext);
  const { token } = useContext(AuthContext);

  return (
    <table className="shortage-table">
      <thead>
        <tr>
          <td>Date</td>
          <td>Medication Name</td>
          <td>Quantity</td>
          <td>Usage In Last 30 Days</td>
          <td>Remaining Day Supply</td>
          <td>Identified</td>
          <td>Confirmed</td>
          <td>Documented By</td>
          <td colSpan={2}>Update/Delete</td>
        </tr>
      </thead>
      <tbody>
        {shortages.map((shortage) => (
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
            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Modal
                key={shortage.id}
                setShortage={setShortage}
                shortage={shortage}
                text={"Update"}
                isSmallButton={true}
                unique={shortage.id}
              >
                <UpdateShortage fetchShortages={fetchShortages} />
              </Modal>
              <DeleteShortage
                token={token}
                id={shortage.id}
                fetchShortages={fetchShortages}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShortageTable;
