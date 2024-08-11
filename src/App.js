import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { userStateChanged } from "./features/user/userSlice";
import { auth } from "./firebase/config";
import { useEffect } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

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
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoginOpen } = useSelector((store) => store.modal);
  const { isAuthReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      dispatch(userStateChanged(authUser));
      unsubscribe();
    });
  }, [dispatch]);

  return (
    <div>
      {isAuthReady && (
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="contact" element={<Contact />} />
            <Route path="search" element={<Search />} />
            <Route path="movie-detail/:id" element={<MovieDetail />} />
            <Route path="series-detail/:id" element={<SeriesDetail />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
          {isLoginOpen && <Login />}
          <ToastContainer position="top-center" className="toastStyle" />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
