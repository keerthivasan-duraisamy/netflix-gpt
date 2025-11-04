import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-10 left-10 bg-gradient-to-to-b from-black/70 to-black/0 p-4 rounded-md">
      <h1>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" className="max-w-32" alt="Netflix Logo" />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
