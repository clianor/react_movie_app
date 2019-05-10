import React from 'react';
import MoviePoster from './MoviePoster';

function Movie({ title, poster, genres, summary }) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster 
                    poster={poster}
                    title={title}
                />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                {genres.map((genre, index) => (
                    <span key={index}>{genre}</span>
                ))}
                <p>{summary}</p>
            </div>
        </div>
    );
}

export default Movie;