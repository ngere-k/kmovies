import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../utils/imageUrl";
import { getYear } from "../../utils/getYear";
import defaultPoster from "../../assets/No_Image_Available.png";
import {
  closeMovieTrailer,
  openMovieTrailer,
} from "../../features/modal/modalSlice";

// components
import Rating from "../../components/rating/Rating";
import WatchTrailerBtn from "../watchTrailerBtn/WatchTrailerBtn";
import Trailer from "../trailer/Trailer";
import CloseBtn from "../closeBtn/CloseBtn";

// styles
import "./DetailsHeader.scss";

const DetailsHeader = ({
  backdrop,
  poster,
  title,
  vote,
  release_date,
  runtime,
  genres,
  overview,
  director,
  creator,
  keywords,
  credits,
}) => {
  const { isMovieTrailerOpen } = useSelector((store) => store.modal);
  const { videos } = useSelector((store) => store.details);
  const dispatch = useDispatch();

  const movieRuntime = (runtime) => {
    const duration = moment.duration(runtime, "minutes");
    const formattedDuration =
      runtime < 60
        ? `${runtime} ${runtime.length < 1 ? "0min" : "min"}`
        : `${duration.hours()}h ${duration.minutes()}min`;

    return formattedDuration;
  };

  const getMovieGenres = genres?.map((genre) => genre.name).join(" / ");

  const getCastsList = credits.cast
    ?.map((cast) => cast.name)
    .slice(0, 4)
    .join(", ");

  const trailer = videos?.find((video) => video.type === "Trailer");

  const handleTrailerModal = () => {
    dispatch(openMovieTrailer());
  };

  const handleCloseTrailer = () => dispatch(closeMovieTrailer());

  useEffect(() => {
    dispatch(closeMovieTrailer());
  }, []);

  const styles = {
    backgroundImage: `url(${imageUrl}${backdrop})`,
    backgroundSize: "cover",
    backgroundPosition: "left calc((50vw - 17rem) - 34rem) top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className="detail__header" style={styles}>
      <div className="detail__wrapper">
        <div className="detail__content container">
          <div className="detail__img-box">
            <img
              src={poster ? `${imageUrl}${poster}` : defaultPoster}
              alt={title}
              className="detail__img"
            />
          </div>
          <div className="detail__text-box">
            <div className="detail__text">
              <h2 className="detail__heading">{title}</h2>
              <div className="detail__ratings">
                <Rating rating={vote} />
                <div className="detail__year">{getYear(release_date)}</div>
                <div className="detail__time">{movieRuntime(runtime)}</div>
              </div>
              <div className="detail__genres">{getMovieGenres}</div>
              <div className="detail__overview">{overview}</div>
            </div>
            <div className="detail__btn-box">
              <WatchTrailerBtn handleTrailerModal={handleTrailerModal} />
            </div>
            <ul className="detail__lists">
              <li className="detail__title">
                {director ? "Director:" : "Creator:"}
              </li>
              <li>{director || creator}</li>
              {getCastsList && <li className="detail__title">Cast:</li>}
              <li className="detail__cast">{getCastsList}</li>
              {!keywords.length < 1 && (
                <li className="detail__title">Keywords:</li>
              )}
              <li className="detail__keywords">
                {keywords?.slice(0, 12).map((keyword) => {
                  return (
                    <span key={keyword.id} className="detail__keyword">
                      {keyword.name}
                    </span>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isMovieTrailerOpen && (
        <div className="trailer">
          <div className="trailer__content">
            <button className="trailer__btn">
              <CloseBtn handleClose={handleCloseTrailer} />
            </button>
            <Trailer trailerKey={trailer?.key} />
          </div>
        </div>
      )}
    </header>
  );
};

export default DetailsHeader;
