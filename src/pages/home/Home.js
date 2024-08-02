import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNewMovies } from "../../features/movies/newMoviesSlice";

// components
import Hero from "../../components/hero/Hero";

// styles
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewMovies());
  }, []);

  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;
