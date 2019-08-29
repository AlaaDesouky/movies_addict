import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div
      style={{ height: "20%" }}
      className="d-flex justify-content-center align-items-center text-center"
    >
      <div className="container">
        <br />
        <h1 className="display-4">{title}</h1>
        <p>{subtitle}</p>
        <hr />
      </div>
    </div>
  );
};

export default Header;
