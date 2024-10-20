import { useState } from "react";
import moment from "moment";
import { imageUrl } from "../../utils/imageUrl";
import Avatar from "../../assets/avatar.jpg";

// styles
import "./Reviews.scss";

const Reviews = ({ reviews }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const formattedDate = (date) => {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
  };

  const toggleText = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (reviews.length < 1) return <h2>There are no reviews</h2>;

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

        const slicedText = content.slice(0, 350);

        return (
          <div key={id} className="review">
            <div className="review__header">
              <figure className="review__figure">
                <img
                  src={avatar_path ? `${imageUrl}/${avatar_path}` : Avatar}
                  alt={author}
                  className="review__avatar"
                />
              </figure>
              <h4 className="heading-quaternary review__name">{author}</h4>
              <p className="review__rating">{rating ? `${rating}.0` : "N/A"}</p>
              <p className="review__created">{formattedDate(created_at)}</p>
            </div>

            <blockquote className="review__text">
              {expandedItems[id]
                ? content
                : `${slicedText}${content <= slicedText ? "" : "..."}`}
              <button
                onClick={() => toggleText(id)}
                className="btn-toggle-text"
              >
                {expandedItems[id]
                  ? `${content <= slicedText ? "" : "Show Less"}`
                  : `${content <= slicedText ? "" : "Show More"}`}
              </button>
            </blockquote>
          </div>
        );
      })}
    </article>
  );
};

export default Reviews;
