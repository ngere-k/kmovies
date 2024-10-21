import { imageUrl } from "../../utils/imageUrl";

// styles
import "./Photos.scss";

const Photos = ({ images: { backdrops } }) => {
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
