import Movie from "./movie/Movie";
import Header from "./common/Header";
import Footer from "./common/Footer";

const App = () => {
  return (
    <>
      <div style={{ height: "100vh" }} className="container">
        <Header
          title="Movies Addict"
          subtitle="Test your movies addiction level"
        />
        <div style={{ height: "70%" }}>
          <Movie />
        </div>
        <Footer repo="" />
      </div>
    </>
  );
};

export default App;
