import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import Bookmarked from "./Pages/Bookmarked/Bookmarked";
import Home from "./Pages/Home/Home";
import TvSeries from "./Pages/TvSeries/TvSeries";
import data from "./data/data.json";

function App() {
  const [allMovies, setAllMovies] = useState(data);
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route index element={<Home allMovies={allMovies} />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvseries" element={<TvSeries />} />
            <Route path="bookmarked" element={<Bookmarked />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
