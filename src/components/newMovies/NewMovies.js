import HomeMovies from "../homeMovies/HomeMovies";

const NewMovies = () => {
  return (
    <HomeMovies url="/movie/now_playing" heading="new movies" path="/movie" />
  );
};

export default NewMovies;
