import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import FrontPage from './FrontPage'
import PopularMovies from './PopularMovies'
import menu from '../utils/menu';

const Main = () => {
    const [movies, setPopularsMovies] = useState()
    const [tredingSellected, setTrendingSellected] = useState('all')

    useEffect(() => {
        const API_Key = 'ca5471b0a4c39d6eeae83b1e0d32f4cb'
        const urlPopularMovies = `https://api.themoviedb.org/3/trending/${tredingSellected}/day?api_key=${API_Key}`;
        axios.get(urlPopularMovies)
            .then(res => {
                setPopularsMovies(res.data);
        
            })
            .catch(err => console.log(err));
    }, [tredingSellected])

    console.log(menu.menuPopular)
    console.log(menu.menuFreeWatch)
    return (
        <section className="mainContainer">
            <FrontPage />
            {movies && <PopularMovies movies={movies} setTrendingSellected={setTrendingSellected} menu={menu.menuPopular}/>} 
            {movies && <PopularMovies movies={movies} setTrendingSellected={setTrendingSellected} menu={menu.menuFreeWatch}/>} 

        </section>
    )
}

export default Main