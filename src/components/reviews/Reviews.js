import moment from "moment";
import { imageUrl } from "../../utils/imageUrl";

// styles
import "./Reviews.scss";

const Reviews = ({ reviews }) => {
  const formattedDate = (date) => {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
  };

  return (
    <article className="review-article">
      {reviews.map((review) => {
        const {
          id,
          created_at,
          content,
          author,
          author_details: { avatar_path, rating },
        } = review;

        return (
          <div key={id} className="review">
            <div className="review__header">
              <figure className="review__figure">
                <img
                  src={`${imageUrl}/${avatar_path}`}
                  alt={author}
                  className="review__avatar"
                />
              </figure>
              <h4 className="heading-quaternary review__name">{author}</h4>
              <p className="review__rating">{rating || 0}</p>
              <p className="review__created">{formattedDate(created_at)}</p>
            </div>
            <blockquote className="review__text">{content}</blockquote>
          </div>
        );
      })}
    </article>
  );
};

export default Reviews;
