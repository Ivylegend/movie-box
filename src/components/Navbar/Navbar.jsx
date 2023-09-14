import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import Menu from "../../assets/images/Menu.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import fetchMovies from "../../api/api";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [Search, setSearch] = useState("");
  console.log(Search);

  const handleSearch = async () => {
    try {
      const movies = await fetchMovies(Search);
      onSearch(movies);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div className="app__navbar">
      <img src={Logo} alt="logo" className="logo"/>
      <div className="navbar__search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="What do you want to watch?"
          value={Search}
        />
        <FaSearch onClick={handleSearch} />
      </div>
      <div className="navbar__menu">
        <Link style={{textDecoration:"none", color:"white"}} to={'./signup'}>
          <p className="signin">Sign In</p>
        </Link>
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
