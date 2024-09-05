import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import customAxios from "../../utils/axios";
import { imageUrl } from "../../utils/imageUrl";

// styles
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { backdrop_path, poster_path, title } = movie;

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      const res = await customAxios(`/movie/${id}`);
      setMovie(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const styles = {
    backgroundImage: `url(${imageUrl}${backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <article className="movie-detail-article">
      <header className="detail__header" style={styles}>
        <div className="detail__wrapper">
          <div className="detail__content container">
            <div className="detail__img-box">
              <img
                src={`${imageUrl}${poster_path}`}
                alt={title}
                className="detail__img"
              />
            </div>
            <div className="detail__text">Text here</div>
          </div>
        </div>
      </header>

      <main>
        <h2>Movie Detail</h2>
      </main>
    </article>
  );
};

export default MovieDetail;
