import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContextController";

import NextPrevButton from "../common/NextPrevButton";
import MoviesSelectList from "./MoviesSelectList";

const Movie = () => {
  const [currentMovie, moviesList, nextMovie, prevMovie] = useContext(
    MoviesContext
  );

  // Create a random selectlist and shuffle it
  let shuffledMoviesList = [];
  if (currentMovie) {
    let currentMoviesList = [currentMovie.movie];
    for (let i = 0; i <= 3; i++) {
      let randomNumber = Math.floor(Math.random() * moviesList.length);
      currentMoviesList = [...currentMoviesList, moviesList[randomNumber]];
    }
    shuffledMoviesList = currentMoviesList.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      {currentMovie && (
        <div style={{ height: "90%" }} className="card-body">
          <h5 className="card-title">{currentMovie.quote}</h5>
          <div className="list-group list-group-flush">
            {shuffledMoviesList.map((movie, index) => (
              <MoviesSelectList
                key={index}
                movie={movie}
                nextMovie={nextMovie}
              />
            ))}
          </div>
        </div>
      )}
      <NextPrevButton nextMovie={nextMovie} prevMovie={prevMovie} />
    </>
  );
};

export default Movie;
