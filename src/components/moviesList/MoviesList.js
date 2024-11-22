import { useSelector } from "react-redux";

// components
import Card from "../card/Card";
import ListView from "../listView/ListView";

// styles
import "./MoviesList.scss";

const MoviesList = ({ movies, path }) => {
  const { grid_view } = useSelector((store) => store.discover);

  if (!grid_view) {
    return <ListView movies={movies} path={path} />;
  }

  return (
    <section className="section-grid-view">
      <div className="grid-col-3">
        {movies.results?.map((movie) => {
          return <Card {...movie} key={movie.id} path={path} />;
        })}
      </div>
    </section>
  );
};

export default MoviesList;
