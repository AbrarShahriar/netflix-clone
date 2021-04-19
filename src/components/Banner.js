import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../axios'
import requests from "../requests";

function Banner() {

    const randomMovieIndex = (arrayOfMovies) => {
        return Math.floor(Math.random() * arrayOfMovies.length)
    }

    const truncate = (str, n) => {
        return str.split('%20').slice(0, n).join('%20') + '...' 
    }

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(requests.fetchNetflixOriginals)
                const i = randomMovieIndex(res.data.results)
                setMovie(res.data.results[i])
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://images.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center center'
            }}
        >
            
            <div className="banner__content">
                <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button><button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">{truncate(movie?.overview, 15)}</h1>
                {/* <h1 className="banner__description">{movie?.overview}</h1> */}
            </div>
            
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
