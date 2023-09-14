import React from "react";
import Ratings from "../Ratings/Ratings";
import "./MovieCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [Search, setSearch] = useState("");
  // console.log(Search);

  useEffect(() => {
    const apiKey = "aefb9c790f6654cb8dddcf8785a7cb66";
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // const movieId = 12345;
    // const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    // .filter((movie) => {
    //   return Search.toLowerCase() === ""
    //     ? movie
    //     : movie.first_name.toLowerCase().includes(Search);
    // })

    axios
      .get(apiUrl)
      .then((response) => {
        const first10movies = response.data.results.slice(0, 10);
        setMovies(first10movies);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movies) {
    return <p>Movie details not found.</p>;
  }

  return (
    <div data-testid="movie-card" className="movie">
      {movies.map((movie, id) => {
        return (
          <>
            <div key={id} className="app__moviecard">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={`${movie.title} Backdrop`}
                  className="backdrop"
                  data-testid="movie-poster"
                />
              </Link>
              <p className="location" data-testid="movie-release-date">
                {movie.release_date}
              </p>
              <p className="movie-title" data-testid="movie-title">
                {movie.original_title}
              </p>
              <Ratings />
              <p className="genre">Action, Adventure, Horror</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MovieCard;
