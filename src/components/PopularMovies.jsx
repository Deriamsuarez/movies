import React, { useState } from 'react'
import Poster from './Poster'

const PopularMovies = ({ popularMovies }) => {
    const [popularMoviesArray, setPopularMoviesArray] = useState(popularMovies.results)



    return (
        <section className="popularMoviesContainer">
            <div className="popularMoviesNav">
                <h2>What's Popular</h2>
                <ul>
                    <li>Streaming</li>
                    <li>On TV</li>
                    <li>For Rent</li>
                    <li>In Theaters</li>
                </ul>
            </div>
            <div className="posterContainer">
                {popularMoviesArray && popularMoviesArray.map((movie) =>
                    <Poster key={movie.id} movie={movie} />)}
            </div>

        </section>

    )
}

export default PopularMovies