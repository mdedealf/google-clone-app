import React, { createContext, useContext, useReducer } from 'react';

// Prepare data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook which allows us to pull the information from the data layer
export const useStateValue = () => useContext(StateContext);
