import { useContext } from "react";

import { MoviesContext } from "../context/MoviesContextController";

const App = () => {
  const [{ text }] = useContext(MoviesContext);
  return (
    <>
      <h1>Movie Addict</h1>
    </>
  );
};

export default App;
