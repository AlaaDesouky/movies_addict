import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextController";

import Movie from "./movie/Movie";
import Score from "./score/Score";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Spinner from "./common/Spinner";

const App = () => {
  const [
    movies,
    currentMovie,
    moviesList,
    nextMovie,
    prevMovie,
    score,
    updateScore,
    step
  ] = useContext(MoviesContext);

  return (
    <>
      <div style={{ height: "100vh" }} className="container">
        <Header
          title="Movies Addict"
          subtitle="Test your movies addiction level"
        />
        <div style={{ height: "70%" }}>
          {movies.length > 0 ? (
            step < movies.length ? (
              <Movie />
            ) : (
              <Score score={score} />
            )
          ) : (
            <Spinner />
          )}
        </div>
        <Footer repo="" />
      </div>
    </>
  );
};

export default App;
