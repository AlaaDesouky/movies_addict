import React from "react";

const Header = ({ title }) => {
  return (
    <div
      style={{ height: "20%" }}
      className="d-flex justify-content-center align-items-center text-center"
    >
      <div className="container">
        <h1 className="display-4">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
