import React from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';
import LinesEllipsis from 'react-lines-ellipsis'

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
                <div>
                    {genres.map((genre, index) => (
                        <span key={index}>{genre}</span>
                    ))}
                </div>
                <p>
                    <LinesEllipsis 
                        text={summary}
                        maxLine='5'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

export default Movie;