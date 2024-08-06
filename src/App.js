import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Contact from "./pages/contact/Contact";
import Search from "./pages/search/Search";
import Error from "./pages/error/Error";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import SeriesDetail from "./pages/seriesDetail/SeriesDetail";

// styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="series-detail/:id" element={<SeriesDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
