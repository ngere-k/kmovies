import HomeMovies from "../homeMovies/HomeMovies";

const TopRatedSeries = () => {
  return (
    <HomeMovies
      url="/tv/top_rated"
      heading="top rated series"
      path="/series-info"
    />
  );
};

export default TopRatedSeries;
