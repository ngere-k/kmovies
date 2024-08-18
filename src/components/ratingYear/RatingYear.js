import Rating from "../rating/Rating";
import { getYear } from "../../utils/getYear";

// styles
import "./RatingYear.scss";

const RatingYear = ({ rating, date, small }) => {
  return (
    <div className={`ry ${small ? "ry--sm" : "ry--md"}`}>
      <Rating rating={rating} />
      <span className="ry__iota">&Iota;</span>
      <div className="ry__year">{getYear(date)}</div>
    </div>
  );
};

export default RatingYear;
