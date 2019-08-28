import { movies } from "../db/moviesdb.json";

export const getRandomMovies = () => {
  let randomNumber;
  let selectedMovies = [];
  for (let i = 0; i < 20; i++) {
    randomNumber = Math.floor(Math.random() * movies.length);
    selectedMovies = [...selectedMovies, movies[randomNumber]];
  }
  return selectedMovies;
};
