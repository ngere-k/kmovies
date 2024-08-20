import HomeMovies from "../homeMovies/HomeMovies";

const TrendingSeries = () => {
  return (
    <HomeMovies
      url="/trending/tv/week"
      heading="trending series"
      path="/series-info"
    />
  );
};

export default TrendingSeries;
