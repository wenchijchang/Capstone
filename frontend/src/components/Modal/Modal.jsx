import { useState, useContext, useEffect } from "react";
import React from "react";
import styled from "styled-components";
import ShortageContext from "../../context/ShortageContext";

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(100, 100, 100, 0.7);
`;

const ModalBody = styled.div`
  background-color: white;
  width: 500px;
  max-height: fit-content;
  margin: 10% auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  color: hsl(207, 92%, 10%);
`;

const Modal = ({
  children,
  shortage,
  setShortage,
  text,
  unique,
  isSmallButton,
}) => {
  const { modalOpen, setModalOpen, modalKey, setModalKey } =
    useContext(ShortageContext);

  return (
    <>
      <button
        className={
          isSmallButton ? "modal-open-button" : "modal-open-button-large"
        }
        onClick={() => {
          setModalKey(unique);
          if (shortage && setShortage) setShortage(shortage);
          setModalOpen(true);
        }}
      >
        {text || ""}
      </button>
      {modalOpen && unique === modalKey && (
        <ModalBackground onClick={() => setModalOpen(false)}>
          <ModalBody onClick={(event) => event.stopPropagation()}>
            <button
              className="modal-close-button"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
