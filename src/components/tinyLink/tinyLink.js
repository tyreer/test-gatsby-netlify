import React from "react";
import { Link } from "gatsby";
import "./tinyLinks.css";

const TinyLink = ({ setActive, incrementCounter, link, text, to }) => {
  const handleMouseOver = () => {
    setActive(link);
    incrementCounter();
  };

  const handleMouseOut = () => {
    setActive(null);
    incrementCounter();
  };

  return (
    <Link
      to={to}
      className={"tinyLink"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </Link>
  );
};

export default TinyLink;