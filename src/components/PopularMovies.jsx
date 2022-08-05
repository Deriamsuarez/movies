import React, { useState } from 'react'
import Poster from './Poster'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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

            <Swiper
                slidesPerView={8}
                spaceBetween={16}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="posterContainer"  >
                {popularMoviesArray && popularMoviesArray.map((movie) =>
                    <Poster className='swipper-slide' key={movie.id} movie={movie} />)}
            </Swiper>
        </section>

    )
}

export default PopularMovies