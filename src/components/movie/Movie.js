import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContextController";

import NextPrevButton from "../common/NextPrevButton";

const Movie = () => {
  const [currentMovie, nextMovie, prevMovie] = useContext(MoviesContext);
  // const { movie, quote } = currentMovie;
  console.log(currentMovie);
  return (
    <>
      {currentMovie && (
        <div className="card-body">
          <h5 className="card-title">{currentMovie.quote}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <em>{currentMovie.movie}</em>
            </li>
          </ul>
        </div>
      )}
      <NextPrevButton nextMovie={nextMovie} prevMovie={prevMovie} />
    </>
  );
};

export default Movie;
