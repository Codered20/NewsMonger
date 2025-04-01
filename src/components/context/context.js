import { createContext, useState } from "react";

// Create a context
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Define two state variables
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  return (
    <AppContext.Provider value={{ keyword, setKeyword, category, setCategory}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
