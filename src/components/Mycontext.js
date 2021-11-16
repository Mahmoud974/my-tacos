import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = props => {
  const [tacos, setTacos] = useState({ setTacos: "M" });

  const checkedMyRadio = e => {
    setTacos({
      setTacos: e.target.value
    });
  };

  return (
    <Context.Provider value={{ tacos, checkedMyRadio }}>
      {props.children}
    </Context.Provider>
  );
};
