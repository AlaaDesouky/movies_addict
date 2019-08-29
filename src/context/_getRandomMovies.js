import { movies } from "../db/moviesdb.json";

export const getRandomMovies = num => {
  let randomNumber;
  let selectedMovies = [];
  for (let i = 0; i < num; i++) {
    randomNumber = Math.floor(Math.random() * movies.length);
    selectedMovies = [...selectedMovies, movies[randomNumber]];
  }
  return selectedMovies;
};

export const getRandomMoviesList = num => {
  let randomNumber;
  let moviesList = [];
  for (let i = 0; i < num; i++) {
    randomNumber = Math.floor(Math.random() * movies.length);
    moviesList = [...moviesList, movies[randomNumber].movie];
  }
  return moviesList;
};
