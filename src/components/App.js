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

  let levelOfAddiction;

  if (score < 20) {
    levelOfAddiction = "What are you doing with your life?";
  } else if (score < 40) {
    levelOfAddiction = "You work too much or something?";
  } else if (score < 60) {
    levelOfAddiction = "Not good, not bad.";
  } else if (score < 80) {
    levelOfAddiction = "Well done, champ.";
  } else {
    levelOfAddiction = "Legendary! Get a social life though.";
  }

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
              <Score score={score} levelOfAddiction={levelOfAddiction} />
            )
          ) : (
            <Spinner />
          )}
        </div>
        <Footer repo="https://github.com/AlaaDesouky/movies_addict" />
      </div>
    </>
  );
};

export default App;
