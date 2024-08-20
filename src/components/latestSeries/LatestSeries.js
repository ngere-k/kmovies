import HomeMovies from "../homeMovies/HomeMovies";

const LatestSeries = () => {
  return (
    <HomeMovies
      url="/tv/on_the_air"
      heading="latest series"
      path="/series-info"
    />
  );
};

export default LatestSeries;
