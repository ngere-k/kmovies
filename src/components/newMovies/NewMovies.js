import Movies from "../movies/Movies";

const NewMovies = () => {
  return <Movies url="/movie/now_playing" heading="new movies" path="/movie" />;
};

export default NewMovies;
