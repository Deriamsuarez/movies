import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import FrontPage from './FrontPage'
import PopularMovies from './PopularMovies'

const Main = () => {

    useEffect(() => {
        const API_Key = 'ca5471b0a4c39d6eeae83b1e0d32f4cb'
        const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_Key}`;
        axios.get(url)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, [])
    



    return (
        <section className="mainContainer">
            <FrontPage />
            <PopularMovies />
        </section>
    )
}

export default Main