import React, { useState, useEffect } from "react";
import { getRandomMovies } from "./_getRandomMovies";

// Creat context
export const MoviesContext = React.createContext();

export const ContextController = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let currentMovies = getRandomMovies();
    setMovies(currentMovies);
  }, []);

  useEffect(() => {
    setCurrentMovie(movies[step]);
  }, [movies]);

  useEffect(() => {
    setCurrentMovie(movies[step]);
  }, [step]);

  const nextMovie = () => {
    if (step < movies.length) {
      setStep(step + 1);
    }
  };

  const prevMovie = () => {
    if (step >= 0) {
      setStep(step - 1);
    }
  };

  return (
    <MoviesContext.Provider value={[currentMovie, nextMovie, prevMovie]}>
      {children}
    </MoviesContext.Provider>
  );
};
