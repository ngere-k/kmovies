import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNewMovies } from "../../features/movies/newMoviesSlice";

// components
import Hero from "../../components/hero/Hero";
import NewMovies from "../../components/newMovies/NewMovies";
import TrendingMovies from "../../components/trendingMovies/TrendingMovies";
import TopRatedMovies from "../../components/topRatedMovies/TopRatedMovies";
import LatestSeries from "../../components/latestSeries/LatestSeries";
import TrendingSeries from "../../components/trendingSeries/TrendingSeries";
import TopRatedSeries from "../../components/topRatedSeries/TopRatedSeries";

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
      <main className="main">
        <NewMovies />
        <TrendingMovies />
        <TopRatedMovies />
        <LatestSeries />
        <TrendingSeries />
        <TopRatedSeries />
      </main>
    </>
  );
};

export default Home;
