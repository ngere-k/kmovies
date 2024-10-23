import { imageUrl } from "../../utils/imageUrl";

// styles
import "./Photos.scss";

const Photos = ({ images: { backdrops } }) => {
  if (backdrops?.length < 1) return <h2>There are no images</h2>;

  return (
    <article className="image-article">
      {backdrops?.slice(0, 12).map((backdrop) => {
        return (
          <figure key={backdrop.file_path} className="backdrop__figure">
            <img
              src={`${imageUrl}/${backdrop.file_path}`}
              alt="backdrop image"
              className="backdrop__image"
            />
          </figure>
        );
      })}
    </article>
  );
};

export default Photos;
