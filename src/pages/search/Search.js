import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changePage,
  fetchSearchMovies,
} from "../../features/search/searchSlice";

// components
import Loading from "../../components/loading/Loading";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";

// styles
import "./Search.scss";

const Search = () => {
  const {
    searchMovies: movies,
    isLoading,
    page,
    pageCount,
  } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(useLocation().search);
  const query = queryParams.get("q");

  useEffect(() => {
    dispatch(fetchSearchMovies({ query, page }));
  }, [query, page]);

  const handlePageClick = (event) => {
    dispatch(changePage(event.selected));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (movies.length < 1) {
    return (
      <article className="empty">
        <h2 className="empty__heading">Search came up empty!</h2>
        <p className="empty__paragraph">
          We didn’t find any results for "{query}"
        </p>
      </article>
    );
  }

  return (
    <article className="search-article">
      <div className="container query">
        <div className="query__content">
          <h2 className="heading-secondary query__heading">
            Search results for <span className="query__str">"{query}"</span>
          </h2>
          <div className="query__movies grid-col-4">
            {movies
              ?.filter((item) => item.media_type !== "person")
              .map((item) => {
                return (
                  <Card
                    key={item.id}
                    {...item}
                    path={
                      item.media_type === "movie" ? "/movie" : "/series-info"
                    }
                  />
                );
              })}
          </div>
        </div>
        <div className="query__pagination">
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            page={page}
          />
        </div>
      </div>
    </article>
  );
};

export default Search;
