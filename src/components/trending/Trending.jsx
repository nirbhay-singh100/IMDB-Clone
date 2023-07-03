import React, { useEffect, useState } from "react";
import "./Trending.css";
import Card from "../card/Card"

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=fd3e0bc6778757d61da0724cce270e32")
        .then(res => res.json())
        .then(data => {
            setTrendingMovies(data.results);   
        });
    },[])

    return (
        <div className="movie__list">
            <h2 className="list__title">TRENDING</h2>
            <div className="list__cards">
                
            {trendingMovies.map(movie => <Card movie={movie} />)}
                
            </div>
        </div>
    )
}

export default Trending;