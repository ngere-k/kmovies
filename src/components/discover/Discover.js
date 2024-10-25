import { Routes, Route, NavLink, useLocation } from "react-router-dom";

// components
import Casts from "../casts/Casts";
import Reviews from "../reviews/Reviews";
import Photos from "../photos/Photos";

// styles
import "./Discover.scss";

const Discover = ({ credits, reviews, images, id, pathname }) => {
  const location = useLocation();

  return (
    <section className="section-discover">
      <div className="discover container">
        <h2 className="heading-secondary">Discover</h2>
        <nav className="discover__nav">
          <ul className="discover__lists">
            <li className="discover__list">
              <NavLink
                to="reviews"
                // Keeps the link active when component first loads
                className={({ isActive }) =>
                  isActive || location.pathname === `/${pathname}/${id}`
                    ? "discover__link active"
                    : "discover__link"
                }
              >
                Reviews
              </NavLink>
            </li>
            <li className="discover__list">
              <NavLink
                to="casts"
                className={({ isActive }) =>
                  isActive ? "discover__link active" : "discover__link"
                }
              >
                Casts
              </NavLink>
            </li>
            <li className="discover__list">
              <NavLink
                to="photos"
                className={({ isActive }) =>
                  isActive ? "discover__link active" : "discover__link"
                }
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="discover__content">
          <Routes>
            <Route index element={<Reviews reviews={reviews} />} />
            <Route path="reviews" element={<Reviews reviews={reviews} />} />
            <Route path="casts" element={<Casts credits={credits} />} />
            <Route path="photos" element={<Photos images={images} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Discover;
