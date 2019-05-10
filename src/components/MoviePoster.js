import React from 'react';
import './MoviePoster.css';

function MoviePoster({ poster, title }) {
    return (
        <img
         className="Movie__Poster"
         src={poster}
         alt={title}
         title={title}
        />
    );
}

export default MoviePoster;