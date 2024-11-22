import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  fetchDiscoverMovies,
} from "../../features/discover/discoverSlice";

// components
import MoviesDiscover from "../../components/moviesDiscover/MoviesDiscover";
import Loading from "../../components/loading/Loading";

// styles
import "./Movies.scss";

const Movies = () => {
  const {
    all_movies: movies,
    page,
    pageCount,
    isLoading,
  } = useSelector((store) => store.discover);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    dispatch(changePage(event.selected));
  };

  useEffect(() => {
    dispatch(fetchDiscoverMovies({ page }));
  }, [page]);

  if (isLoading) {
    return <Loading fullPageLoading />;
  }

  return (
    <article className="article-movies mgtp-md">
      <MoviesDiscover
        movies={movies}
        path="/movie"
        page={page}
        pageCount={pageCount}
        handlePageClick={handlePageClick}
      />
    </article>
  );
};

export default Movies;
