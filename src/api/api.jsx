import React from 'react';
import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "aefb9c790f6654cb8dddcf8785a7cb66";

const fetchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                query: query,
            },
        });
        return response.data.results;
    } catch (error) {
        throw(error);
    }
  return (
    <div>fetchMovies</div>
  )
}

export default fetchMovies