const Score = ({ score, levelOfAddiction }) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="display-4 mt-5">Your Score</h2>
      <div
        style={{ padding: "70px" }}
        className="rounded-pill border border-info font-weight-normal mt-3"
      >
        <h2>{score}</h2>
      </div>
      <p className="mt-3">{levelOfAddiction}</p>
      <button
        className="btn btn-dark btn-sm  mt-3"
        onClick={() => window.location.reload()}
      >
        Play Again?
      </button>
    </div>
  );
};

export default Score;
