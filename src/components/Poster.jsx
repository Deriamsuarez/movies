import React from 'react'
import { useState, useEffect } from 'react'

const Poster = (movie) => {
const [number, setNumber] = useState(0)

useEffect(() => {
    if (movie.movie.media_type === 'movie') {
        return setNumber(0)
    }else{
        return setNumber(1)
    }

}, [])


   let moviesInfo = [
        {poster: movie.movie.poster_path, name: movie.movie.title,  date: movie.movie.release_date},
        {poster: movie.movie.poster_path, name: movie.movie.name,  date: movie.movie.first_air_date}
    ]

    return (
        <div className="moviesCardContainer swiper-wrapper">
            <div className="card swiper-slide">
                <div className="poster">
                    {movie && <img src={`https://image.tmdb.org/t/p/original/${moviesInfo[number].poster}`} />}
                </div>
                <div className="infoMovie">
                    <a href="http://" target="_blank" rel="noopener noreferrer">{moviesInfo[number].name}</a>
                    <span>{moviesInfo[number].date}</span>
                </div>
            </div>
        </div>
    )
}

export default Poster