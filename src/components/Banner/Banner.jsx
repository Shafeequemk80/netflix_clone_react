import React from "react";
import { API_KEY,imageUrl } from "../../constants/constants";
import "./Banner.css";
import requests from '../../Urls'
import axios from "../../axios";
import { useEffect } from "react";
import { useState } from "react";

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((res) => {
  
      const rd = Math.floor(Math.random() * 21); 
      setMovie(res.data.results[rd])

    });
  },[])
  return (
    <>
      <div className="banner"
      style={{backgroundImage:`url(${movie && imageUrl+movie.backdrop_path})`}}
      >
        
        <div className="content">
          <h1 className="title">{movie&& movie.title}</h1>
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons"> My List</button>
          <p className="description">
           {movie&& movie.overview}
          </p>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </>
  );
}

export default Banner;
