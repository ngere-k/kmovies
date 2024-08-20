import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Card from "../card/Card";
import customAxios from "../../utils/axios";

// styles
import "./HomeMovies.scss";

const HomeMovies = ({ url, heading, path }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const moviesSlice = movies?.slice(0, 8);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const res = await customAxios.get(url);
      setIsLoading(false);
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="container">
        <h2 className="heading-secondary">{heading}</h2>
        <div className="movies-grid">
          {moviesSlice.map((movie) => {
            return <Card key={movie.id} {...movie} path={path} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeMovies;
