import { imageUrl } from "../../utils/imageUrl";
import Avatar from "../../assets/avatar.jpg";

// styles
import "./Casts.scss";

const Casts = ({ credits: { cast } }) => {
  return (
    <article className="cast-article">
      {cast?.slice(0, 20).map((item) => {
        const { id, profile_path, name, character } = item;
        return (
          <div key={id} className="cast">
            <figure className="cast__figure">
              <img
                src={profile_path ? `${imageUrl}/${profile_path}` : Avatar}
                alt={name}
                className="cast__avatar"
              />
            </figure>
            <h4 className="heading-quaternary cast__name">{name}</h4>
            <p className="cast__character">{character}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Casts;
