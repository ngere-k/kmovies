import HomeMovies from "../homeMovies/HomeMovies";

const TrendingMovies = () => {
  return (
    <HomeMovies
      url="/trending/movie/week"
      heading="trending movies"
      path="/movie"
    />
  );
};

export default TrendingMovies;
