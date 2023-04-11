import { useState } from "react";
import React from "react";
import styled from "styled-components";

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
  height: 500px;
  margin: 10% auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;

  align-items: center;
  font-size: 1.5rem;
  text-align: center;
`;

const Modal = ({ children, shortage, setShortage, text }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          if (shortage && setShortage) setShortage(shortage);
          setModalOpen(true);
        }}
      >
        {text || ""}
      </button>
      {modalOpen && (
        <ModalBackground onClick={() => setModalOpen(false)}>
          <ModalBody onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );

  //     <div className="modalBackground">
  //       <div className="modalContainer">
  //         <div className="titleCloseBtn">

  //         </div>
  //         <div className="title">
  //           <h1>A</h1>
  //         </div>
  //         <div className="body">
  //           <p>The next page looks amazing. Hope you want to go there!</p>
  //         </div>
  //         <div className="footer">
  //           <button
  //             onClick={() => {
  //               setOpenModal(false);
  //             }}
  //             id="cancelBtn"
  //           >
  //             Cancel
  //           </button>
  //           <button>Update</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default Modal;