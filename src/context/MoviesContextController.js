import React, { useState } from "react";
import { getRandomMovies } from "./_getRandomMovies";

// Creat context
export const MoviesContext = React.createContext();

// Initializing state
let currentMovies = getRandomMovies();

export const ContextController = ({ children }) => {
  const [state, setState] = useState(currentMovies);
  return (
    <MoviesContext.Provider value={[state]}>{children}</MoviesContext.Provider>
  );
};
