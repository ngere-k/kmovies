import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import customAxios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCredits,
  fetchKeywords,
  fetchRecommendations,
  fetchVideos,
} from "../../features/details/detailsSlice";

// components
import Loading from "../../components/loading/Loading";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";

// styles
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { credits, keywords, recommendations } = useSelector(
    (store) => store.details
  );
  const dispatch = useDispatch();

  const findDirectorObj = credits.crew?.find((item) => item.job === "Director");

  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    release_date,
    runtime,
    genres,
    overview,
  } = movie;

  const movieDetailsObj = {
    backdrop: backdrop_path,
    poster: poster_path,
    title,
    vote: vote_average,
    release_date,
    runtime,
    genres,
    overview,
    director: findDirectorObj?.original_name,
    credits,
    keywords,
  };

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
    dispatch(fetchCredits({ type: "movie", id }));
    dispatch(fetchKeywords({ type: "movie", id }));
    dispatch(fetchVideos({ type: "movie", id }));
    dispatch(fetchRecommendations({ type: "movie", id }));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <article className="movie-detail-article">
      <DetailsHeader {...movieDetailsObj} />

      {/* div for cast */}
      <div>
        <h2>Movie Detail</h2>
      </div>
      {/* div for cast */}
    </article>
  );
};

export default MovieDetail;
