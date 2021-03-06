import React from "react";

const Footer = ({ repo }) => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <p className="text-muted  float-right">
          <span>&copy; AD {year}, </span>
          <span>
            View on{" "}
            <a href={repo} target="_blank" rel="noopener noreferrer">
              github
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
