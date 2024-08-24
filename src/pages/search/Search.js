import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import customAxios from "../../utils/axios";

// components
import Loading from "../../components/loading/Loading";

// styles
import "./Search.scss";
import Card from "../../components/card/Card";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = new URLSearchParams(useLocation().search);
  const query = queryParams.get("q");

  const fetchQuery = async (query) => {
    setIsLoading(true);
    try {
      const res = await customAxios("/search/multi", {
        params: { query },
      });
      setIsLoading(false);
      setSearch(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuery(query);
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }

  if (search.length < 1) {
    return (
      <article className="empty">
        <h2 className="empty__heading">Search came up empty!</h2>
        <p className="empty__paragraph">
          We didn’t find any results for "{query}".
        </p>
      </article>
    );
  }

  return (
    <article className="search-article">
      <div className="container">
        <h2 className="heading-secondary query__heading">
          Search results for <span className="query__str">"{query}"</span>
        </h2>
        <div className="query__movies grid-col-4">
          {search
            ?.filter((item) => item.media_type !== "person")
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  {...item}
                  path={item.media_type === "movie" ? "/movie" : "/series-info"}
                />
              );
            })}
        </div>
      </div>
    </article>
  );
};

export default Search;
