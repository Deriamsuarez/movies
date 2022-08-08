import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import FrontPage from './FrontPage'
import PopularMovies from './PopularMovies'
import menu from '../utils/menu';

const Main = () => {
    const [movies, setPopularMovies] = useState();
    const [moviesFree, setMoviesFree] = useState();
    const [tredingSellected, setTrendingSellected] = useState('all');
    const [tredingSellected2, setTrendingSellected2] = useState('all');
    const API_Key = 'ca5471b0a4c39d6eeae83b1e0d32f4cb';

    useEffect(() => {
        const urlPopularMovies = `https://api.themoviedb.org/3/trending/${tredingSellected}/day?api_key=${API_Key}`;
        axios.get(urlPopularMovies)
            .then(res => setPopularMovies(res.data))
            .catch(err => console.log(err));
    }, [tredingSellected])

    useEffect(() => {
        const urlfreeMovies = `https://api.themoviedb.org/3/trending/${tredingSellected2}/day?api_key=${API_Key}`;
        axios.get(urlfreeMovies)
            .then(res => setMoviesFree(res.data))
            .catch(err => console.log(err));
    }, [tredingSellected2])

    return (
        <section className="mainContainer">
            <FrontPage />
            {movies && <PopularMovies
                movies={movies}
                setTrendingSellected={setTrendingSellected}
                menu={menu.menuPopular} />}

            {moviesFree && <PopularMovies
                movies={moviesFree}
                setTrendingSellected={setTrendingSellected2}
                menu={menu.menuFreeWatch} />}
        </section>
    )
}

export default Main