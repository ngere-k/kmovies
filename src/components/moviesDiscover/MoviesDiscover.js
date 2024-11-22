// components
import Filters from "../../components/filters/Filters";
import Sort from "../../components/sort/Sort";
import MoviesList from "../../components/moviesList/MoviesList";
import Pagination from "../../components/pagination/Pagination";

// styles
import "./MoviesDiscover.scss";

const MoviesDiscover = ({ movies, path, page, pageCount, handlePageClick }) => {
  return (
    <article className="container article-discover">
      <Filters />
      <div className="discover-main">
        <Sort />
        <MoviesList movies={movies} path={path} />
        <div className="discover-pagination">
          <Pagination
            page={page}
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />
        </div>
      </div>
    </article>
  );
};

export default MoviesDiscover;
