const NextPrevButton = ({ prevMovie, nextMovie }) => {
  return (
    <div
      className="btn-group d-flex justify-content-center mt-auto"
      role="group"
    >
      <button className="btn btn-dark btn-sm" onClick={prevMovie}>
        <span className="carousel-control-prev-icon dark"></span>
        <span className="sr-only">Prev</span>
      </button>
      <button className="btn btn-dark btn-sm" onClick={nextMovie}>
        <span className="carousel-control-next-icon dark"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default NextPrevButton;
