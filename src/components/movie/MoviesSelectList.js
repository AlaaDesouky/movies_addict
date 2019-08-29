const MoviesSelectList = ({ movie, onClick }) => {
  return (
    <input
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      onClick={onClick}
      value={movie}
      type="button"
    />
  );
};

export default MoviesSelectList;
