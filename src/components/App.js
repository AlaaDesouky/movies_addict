import Movie from "./movie/Movie";
import Score from "./score/Score";
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
          {/* <Movie /> */}
          <Score score="70" />
        </div>
        <Footer repo="" />
      </div>
    </>
  );
};

export default App;
