import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMovie from "./components/NavbarMovie";
import MovieList from "./components/MovieList";
import { Data } from "./Data";
import "./Css/MovieList.css";
import "./Css/AddMovie.css";
import "./Css/MovieList.css";
import "./Css/App.css";

import WatchMovie from "./components/WatchMovie";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const [data, setDatamovie] = useState(Data);

  const AddMovieFunc = (newfilm) => {
    return setDatamovie([...data, newfilm]);
  };

  const [searchTitleFilm, setSearchTitleFilm] = useState("");
  const [searchRateFilm, setsearchRateFilm] = useState("");

  return (
    <>
      <NavbarMovie  AddMovieFunc={AddMovieFunc} setsearchRateFilm={setsearchRateFilm}   setSearchTitleFilm={ setSearchTitleFilm} />

      <Routes>
        <Route path="/" element={ <MovieList
          searchTitleFilm={searchTitleFilm}
          searchRateFilm={searchRateFilm}
          Data={data}
        />} />

        <Route path="/:id" element={<WatchMovie data={data} />} />
       
      </Routes>

      <Footer/>
  
    </>
  );
};

export default App;
