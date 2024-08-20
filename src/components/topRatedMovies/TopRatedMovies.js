import HomeMovies from "../homeMovies/HomeMovies";

const TopRatedMovies = () => {
  return (
    <HomeMovies
      url="/movie/top_rated"
      heading="top rated movies"
      path="/movie"
    />
  );
};

export default TopRatedMovies;
