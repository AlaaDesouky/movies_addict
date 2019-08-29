const MoviesSelectList = ({ movie, nextMovie }) => {
  return (
    <button
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onClick={nextMovie}
    >
      <em>{movie}</em>
    </button>
  );
};

export default MoviesSelectList;
