import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNewMovies } from "../../features/movies/newMoviesSlice";

// components
import Hero from "../../components/hero/Hero";
import NewMovies from "../../components/newMovies/NewMovies";

// styles
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewMovies());
  }, []);

  return (
    <>
      <Hero />
      <div className="main">
        <NewMovies />
      </div>
    </>
  );
};

export default Home;
