import React from 'react'

const Poster = (movie) => {
    console.log(movie.movie)
    return (
        <div className="moviesCardContainer">
            <div className="card">
                <div className="poster">
                    {movie && <img src={`https://image.tmdb.org/t/p/original/${movie?.movie.poster_path}`} />}
                </div>
                <div className="infoMovie">
                    <a href="http://" target="_blank" rel="noopener noreferrer">{movie.movie.title}</a>
                    <span>{movie.movie.release_date}</span>
                </div>
            </div>
        </div>
    )
}

export default Poster