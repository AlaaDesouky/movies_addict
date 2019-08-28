import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextController";

import Header from "./common/Header";
import Footer from "./common/Footer";

const App = () => {
  const [movies] = useContext(MoviesContext);
  return (
    <>
      <div style={{ height: "100vh" }} className="container">
        <Header title="Movies Addict" />
        <div style={{ height: "70%" }}>
          <p>Content here</p>
        </div>
        <Footer repo="" />
      </div>
    </>
  );
};

export default App;
