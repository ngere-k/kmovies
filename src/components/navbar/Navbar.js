import { useState } from "react";
import { PiMagnifyingGlassBold, PiSunFill, PiMoonFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";

// styles
import "./Navbar.scss";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search");
    setSearchTerm("");
  };

  return (
    <header className="header">
      <Logo />

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies, tv series and people"
          className="search__input"
        />
        <button className="search__icon-box">
          <PiMagnifyingGlassBold className="search__icon" />
        </button>
      </form>

      <nav className="nav">
        <ul className="nav__links">
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "nav__link active" : "nav__link"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/series" className="nav__link">
              Series
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav__link">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="user">
        <div className="user__box">
          <span className="user__name">my-username-is-long</span>
          <span className="user__icon">
            <MdKeyboardArrowDown />
          </span>

          <div className="user__logout-box">
            <button className="user__logout">Logout</button>
          </div>
        </div>

        <div className="user__theme">
          <span className="user__light">
            <PiSunFill className="user__icon" />
          </span>
          <span className="user__dark">
            <PiMoonFill className="user__icon" />
          </span>
        </div>

        <button className="user__btn">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
