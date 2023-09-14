import React, { useEffect, useState } from "react";
import "./Featured.css";
import { FaChevronRight } from "react-icons/fa";
import MovieCard from "../../components/MovieCard/MovieCard";

const Featured = () => {
  return (
    <div className="app__featured">
      <div className="featured__header">
        <h2>Featured Movies</h2>
        <span className="see-more">
          See More
          <FaChevronRight />
        </span>
      </div>
      <MovieCard />
    </div>
  );
};

export default Featured;
