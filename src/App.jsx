import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MarkedProvider } from "./Hooks/Context";
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
        <MarkedProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home allMovies={allMovies} />}></Route>
            <Route
              path="movies"
              element={
                <Movies
                  movies={allMovies.filter(
                    (movie) => movie.category === "Movie"
                  )}
                />
              }
            />
            <Route
              path="tvseries"
              element={
                <TvSeries
                  movies={allMovies.filter(
                    (movie) => movie.category === "TV Series"
                  )}
                />
              }
            />
            <Route path="bookmarked" element={<Bookmarked />} />
          </Routes>
        </MarkedProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
