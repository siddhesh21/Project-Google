import React, { createContext, useContext, useReducer } from "react";

//Preparing a DATA LAYER
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Redirect to App */}
    {children}
  </StateContext.Provider>
);

// Hook which allows us to pull info from the DATA LAYER

export const useStateValue = () => useContext(StateContext);
