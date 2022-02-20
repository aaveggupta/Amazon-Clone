import React, { createContext, useContext, useReducer } from "react";

const DataLayer = createContext();

export const StateProvider = (props) => {
  return (
    <DataLayer.Provider value={useReducer(props.reducer, props.initialState)}>
      {props.children}
    </DataLayer.Provider>
  );
};

export const useDataLayer = () => useContext(DataLayer);
