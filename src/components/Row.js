import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from '../axios'
import YouTube from 'react-youtube'
import movieTrailor from "movie-trailer";

const baseUrl = `https://images.tmdb.org/t/p/original/`

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailorUrl, setTrailorUrl] = useState('')

    useEffect(() => {
        async function fetchData() {
             try {
                const res = await axios.get(fetchUrl)
                setMovies(res.data.results)
             } catch (error) {
                 console.log(error);
             }
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if(trailorUrl) {
            setTrailorUrl('')
        } else {
            movieTrailor(movie?.name || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailorUrl(urlParams.get('v'))
            })
            .catch(err => console.log(err))
        }

    }

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className={`row__posters`}>
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && `row__poster__large`}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>

            {trailorUrl && <YouTube videoId={trailorUrl} opts={opts} />}
        </div>
    )
}

export default Row
