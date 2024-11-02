import { Link } from "react-router-dom";
import { imageUrl } from "../../utils/imageUrl";
import RatingYear from "../ratingYear/RatingYear";
import defaultPoster from "../../assets/No_Image_Available.png";

// styles
import "./Card.scss";

const Card = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  name,
  first_air_date,
  air_date,
  episode_count,
  path,
}) => {
  const truncatedTitle =
    title?.length >= 25 ? title.slice(0, 25) + "..." : title;

  const truncatedName = name?.length >= 25 ? name.slice(0, 25) + "..." : name;

  return (
    <div className="card">
      <Link to={episode_count ? "" : `${path}/${id}`} className="card__link">
        <img
          src={poster_path ? `${imageUrl}${poster_path}` : defaultPoster}
          className="card__img"
          alt={title}
        />
      </Link>

      <div className="card__content">
        <div className="card__heading">
          <Link
            to={episode_count ? "" : `${path}/${id}`}
            className="heading-tertiary card__text-link"
          >
            {truncatedTitle || truncatedName}
          </Link>
          {episode_count && (
            <p className="card__episode">{`${episode_count} Episode`}</p>
          )}
        </div>
        <RatingYear
          rating={vote_average}
          date={release_date || first_air_date || air_date}
          small
        />
      </div>
    </div>
  );
};

export default Card;
