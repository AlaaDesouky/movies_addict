import React, { useState } from "react";

export const MoviesContext = React.createContext();

// Initializing state
let initialState = { text: "Hello from context" };

export const ContextController = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <MoviesContext.Provider value={[state]}>{children}</MoviesContext.Provider>
  );
};
