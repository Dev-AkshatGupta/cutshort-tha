import { createContext,useContext } from "react";
const FormContext=createContext();
const useFormContext=()=>FormContext();

const FromContexProvider = ({ children }) => {
  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>;
};

export { FromContexProvider,useFormContext}
