// components
import Filters from "../../components/filters/Filters";
import Sort from "../../components/sort/Sort";
import MoviesList from "../../components/moviesList/MoviesList";
import Pagination from "../../components/pagination/Pagination";

// styles
import "./MoviesDiscover.scss";

const MoviesDiscover = () => {
  return (
    <article className="container article-discover">
      <Filters />
      <div className="discover-main">
        <Sort />
        <MoviesList />
        <h2>Pagination</h2>
      </div>
    </article>
  );
};

export default MoviesDiscover;
