import { PiStarFill } from "react-icons/pi";

// styles
import "./Rating.scss";

const Rating = ({ rating }) => {
  const truncatedRating = Math.floor(rating * 10) / 10;

  return (
    <div className="rating">
      <PiStarFill className="rating__icon" />
      <span className="rating__number">{truncatedRating}</span>
    </div>
  );
};

export default Rating;
