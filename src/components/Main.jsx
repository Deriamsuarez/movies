import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import FrontPage from './FrontPage'
import PopularMovies from './PopularMovies'

const Main = () => {
    const [popularMovies, setPopularsMovies] = useState()

    useEffect(() => {
        const API_Key = 'ca5471b0a4c39d6eeae83b1e0d32f4cb'
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}`;
        axios.get(url)
            .then(res => {
                setPopularsMovies(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <section className="mainContainer">
            <FrontPage />
            {popularMovies && <PopularMovies popularMovies={popularMovies}/>} 
        </section>
    )
}

export default Main