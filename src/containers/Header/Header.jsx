// import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchResults) => {
    setMovies(searchResults);
  }
  return (
    <div className="app__header">
      <Navbar onSearch={handleSearch}/>
      <Hero />
    </div>
  );
};

export default Header;
