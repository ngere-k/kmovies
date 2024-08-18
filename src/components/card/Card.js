import { Link } from "react-router-dom";
import { imageUrl } from "../../utils/imageUrl";
import RatingYear from "../ratingYear/RatingYear";

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
  path,
}) => {
  const truncatedTitle =
    title?.length >= 25 ? title.slice(0, 25) + "..." : title;

  const truncatedName = name?.length >= 25 ? name.slice(0, 25) + "..." : name;

  return (
    <div className="card">
      <Link to={`${path}/${id}`} className="card__link">
        <img
          src={`${imageUrl}${poster_path}`}
          className="card__img"
          alt={title}
        />
      </Link>

      <div className="card__content">
        <Link to={`${path}/${id}`} className="heading-tertiary card__text-link">
          {truncatedTitle || truncatedName}
        </Link>
        <RatingYear
          rating={vote_average}
          date={release_date || first_air_date}
          small
        />
      </div>
    </div>
  );
};

export default Card;
