import { createContext, useState } from "react";

const ShortageContext = createContext();

export default ShortageContext;

export const ShortageProvider = ({ children }) => {
  const [shortage, setShortage] = useState("shortage test");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState("");

  const contextData = {
    shortage,
    setShortage,
    modalOpen,
    setModalOpen,
    modalKey,
    setModalKey,
  };

  return (
    <ShortageContext.Provider value={contextData}>
      {children}
    </ShortageContext.Provider>
  );
};
