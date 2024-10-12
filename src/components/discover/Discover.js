import { Routes, Route, Link } from "react-router-dom";

// components
import Casts from "../casts/Casts";
import Reviews from "../reviews/Reviews";
import Photos from "../photos/Photos";

// styles
import "./Discover.scss";

const Discover = ({ credits, reviews, images }) => {
  return (
    <section className="section-discover">
      <div className="container">
        <nav className="discover">
          <ul>
            <li className="discover__link">
              <Link to="reviews">Reviews</Link>
            </li>
            <li className="discover__link">
              <Link to="casts">Casts</Link>
            </li>
            <li className="discover__link">
              <Link to="photos">Photos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index path="/" element={<Reviews reviews={reviews} />} />
          <Route path="reviews" element={<Reviews reviews={reviews} />} />
          <Route path="casts" element={<Casts credits={credits} />} />
          <Route path="photos" element={<Photos images={images} />} />
        </Routes>
      </div>
    </section>
  );
};

export default Discover;
