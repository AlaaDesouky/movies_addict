import React, { useState, useEffect } from "react";
import { getRandomMovies, getRandomMoviesList } from "./_getRandomMovies";

// Creat context
export const MoviesContext = React.createContext();

export const ContextController = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let currentMovies = getRandomMovies(10);
    let currentMoviesList = getRandomMoviesList(60);
    setMovies(currentMovies);
    setMoviesList(currentMoviesList);
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
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  };

  const updateScore = () => {
    setScore(score + 10);
  };

  return (
    <MoviesContext.Provider
      value={[
        movies,
        currentMovie,
        moviesList,
        nextMovie,
        prevMovie,
        score,
        updateScore,
        step
      ]}
    >
      {children}
    </MoviesContext.Provider>
  );
};
