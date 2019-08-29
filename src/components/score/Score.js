const Score = ({ score }) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="display-4 mt-5">Your Score</h2>
      <div
        style={{ padding: "70px" }}
        className="rounded-circle border border-info font-weight-normal mt-5"
      >
        <h2>{score}</h2>
      </div>
      <button
        className="btn btn-dark btn-sm  mt-5"
        onClick={() => window.location.reload()}
      >
        Play Again?
      </button>
    </div>
  );
};

export default Score;
