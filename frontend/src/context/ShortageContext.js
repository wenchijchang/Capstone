import { createContext, useState } from "react";

const ShortageContext = createContext();

export default ShortageContext;

export const ShortageProvider = ({ children }) => {
  const [shortage, setShortage] = useState("shortage test");

  const contextData = {
    shortage,
    setShortage,
  };

  return (
    <ShortageContext.Provider value={contextData}>
      {children}
    </ShortageContext.Provider>
  );
};
