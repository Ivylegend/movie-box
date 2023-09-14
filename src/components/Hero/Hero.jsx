import React from 'react';
import "./Hero.css";
import {FaPlayCircle} from "react-icons/fa"
import Ratings from '../Ratings/Ratings';

const Hero = () => {
  return (
    <div className='app__hero'>
      <h1>John Wick 3 : Parabellum</h1>
      <Ratings />
      <p>
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>
      <button><FaPlayCircle /> WATCH TRAILER</button>
    </div>
  );
};

export default Hero;
