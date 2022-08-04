import React from 'react'
import Poster from './Poster'

const PopularMovies = () => {
    return (
        <section className="PopularMoviesContainer">
            <div className="popularMoviesNav">
                <h2>What's Popular</h2>
                <ul>
                    <li>Streaming</li>
                    <li>On TV</li>
                    <li>For Rent</li>
                    <li>In Theaters</li>
                </ul>
            </div>
        <Poster/>
        </section>

    )
}

export default PopularMovies