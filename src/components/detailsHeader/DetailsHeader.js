import { imageUrl } from "../../utils/imageUrl";
import { getYear } from "../../utils/getYear";
import { PiPlayFill } from "react-icons/pi";
import moment from "moment";

// components
import Rating from "../../components/rating/Rating";

// styles
import "./DetailsHeader.scss";

const DetailsHeader = ({
  backdrop_path,
  poster_path,
  title,
  vote_average,
  release_date,
  runtime,
  genres,
  overview,
  director,
  keywords,
  credits,
}) => {
  const movieRuntime = (runtime) => {
    const duration = moment.duration(runtime, "minutes");
    const formattedDuration =
      runtime < 60
        ? `${runtime} min`
        : `${duration.hours()}h ${duration.minutes()}min`;

    return formattedDuration;
  };

  const getMovieGenres = genres
    ?.map((genre) => {
      return genre.name;
    })
    .join(" / ");

  const getCastsList = credits.cast
    ?.map((cast) => cast.name)
    .slice(0, 4)
    .join(", ");

  const styles = {
    backgroundImage: `url(${imageUrl}${backdrop_path})`,
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
              src={`${imageUrl}${poster_path}`}
              alt={title}
              className="detail__img"
            />
          </div>
          <div className="detail__text-box">
            <div className="detail__text">
              <h2 className="detail__heading">{title}</h2>
              <div className="detail__ratings">
                <Rating rating={vote_average} />
                <div className="detail__year">{getYear(release_date)}</div>
                <div className="detail__time">{movieRuntime(runtime)}</div>
              </div>
              <div className="detail__genres">{getMovieGenres}</div>
              <div className="detail__overview">{overview}</div>
            </div>
            <button className="btn btn--round detail__btn">
              <PiPlayFill className="swiper__icon" />
              Watch Trailer
            </button>
            <ul className="detail__lists">
              <li className="detail__title">Director:</li>
              <li>{director}</li>
              <li className="detail__title">Cast:</li>
              <li className="detail__cast">{getCastsList}</li>
              {!keywords.length < 1 && (
                <li className="detail__title">Keywords:</li>
              )}
              <li className="detail__keywords">
                {keywords?.slice(0, 20).map((keyword) => {
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
    </header>
  );
};

export default DetailsHeader;
