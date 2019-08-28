import React, { useState, useEffect } from "react";
import { getRandomMovies } from "./_getRandomMovies";

// Creat context
export const MoviesContext = React.createContext();

export const ContextController = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let currentMovies = getRandomMovies();
    setMovies(currentMovies);
  }, []);

  return (
    <MoviesContext.Provider value={[movies]}>{children}</MoviesContext.Provider>
  );
};
