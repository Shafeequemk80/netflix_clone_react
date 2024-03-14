import React from "react";
import "./RowPost.css";
import { imageUrl, API_KEY } from "../../constants/constants";
import axios from "../../axios";
import { useState } from "react";
import YouTube from "react-youtube";
import { useEffect } from "react";
function RowPost(props) {
  const [rows, setRows] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios.get(props.url).then((res) => {
     
      setRows(res.data.results);
    });
  }, []);

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        
        if (res.data.results.length) {
          setUrl(res.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {rows.map((obj,i) => {
          return (
            <img
              onClick={() => handleMovie(obj.id)}
              key={i}
              className={props.isSmall ? "smallPoster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          );
        })}
      </div>
      {url && <YouTube videoId={url.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
