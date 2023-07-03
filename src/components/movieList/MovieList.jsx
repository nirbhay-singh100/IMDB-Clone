import React, {useEffect, useState} from "react";
import Card from "../card/Card";
import "./MovieList.css";
import {useParams} from "react-router-dom";

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const {type} = useParams();

    useEffect(() => {
        getData();
    },[])

    useEffect(() => {
        getData();
    },[type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=fd3e0bc6778757d61da0724cce270e32`)
        .then(res => res.json())
        .then(data => {
            setMovieList(data.results)
            //console.log(data.results);
        });

    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => <Card movie={movie} />)
                }
            </div>
        </div>
    )
}

export default MovieList;