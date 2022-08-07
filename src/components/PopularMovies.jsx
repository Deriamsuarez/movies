import React, { useState, useEffect } from 'react'
import Poster from './Poster'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const PopularMovies = ({ menu, movies, setTrendingSellected }) => {
    const [popularMoviesArray, setPopularMoviesArray] = useState(movies.results)
    useEffect(() => {
        setPopularMoviesArray(movies.results)
    }, [movies])


    let buttons = document.querySelectorAll('.itemSelectPopularMenu');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active')
        })
    })

    console.log(menu.title)
    return (
        <section className="popularMoviesContainer">
            <div className="popularMoviesNav">
                <h2>{menu.title}</h2>
                <ul>
                    {menu && menu.menu.map((item, index) =>
                        <li key={index} onClick={() => setTrendingSellected(item.type)} className='itemSelectPopularMenu'>{item.name}</li>)}
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