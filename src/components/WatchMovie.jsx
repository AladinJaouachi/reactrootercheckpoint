import React from "react";
import "../Css/WatchMovie.css";
import { useParams } from "react-router-dom";
const WatchMovie = ({ data }) => {
  const url = parseFloat(useParams().id);
  const filmsearched = data.filter((film) => {
    if (film.id === url) {
      return film;
    }
  })[0];

  return (
    <>
      <div className="carta">
        <img src={filmsearched.stream_img} alt="" />

        <div className="wast">
          <h1> {filmsearched.stream_name} </h1>
          <p>{filmsearched.descrip}</p>
          <div className="tt">
            <span>genre:</span> <p>{filmsearched.rate} </p>
          </div>
          <div className="tt">
            <span>rate: </span> <p> {filmsearched.rate}</p>{" "}
          </div>
        </div>

        <div className="btn">
          <button className="btn1">
            <a href="#video">watch Now</a>{" "}
          </button>
          <button className="btn2">
            <a target="_blank" href="#">
              download
            </a>{" "}
          </button>
        </div>
      </div>
      <div>
        <video id="video" controls>
          <source src="your-video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};


export default WatchMovie;
