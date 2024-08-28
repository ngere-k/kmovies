import { useState } from "react";
import { PiMagnifyingGlassBold, PiSunFill, PiMoonFill } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLogoutModal,
  openLoginModal,
  toggleMode,
} from "../../features/modal/modalSlice";
import { signOutUser } from "../../features/user/userSlice";
import { changePage } from "../../features/search/searchSlice";

// styles
import "./Navbar.scss";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useSelector((store) => store.user);
  const { isLogoutOpen, mode } = useSelector((store) => store.modal);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedQuery = searchTerm.replaceAll(" ", "+");
    navigate(`/search?q=${formattedQuery}`);
    dispatch(changePage(0)); // reset page
    setSearchTerm("");
  };

  const handleLogout = () => {
    dispatch(signOutUser());
    dispatch(toggleLogoutModal());
  };

  return (
    <header className="header">
      <Logo />

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies and tv series..."
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
          {user && (
            <div
              className="user__name-box"
              onClick={() => dispatch(toggleLogoutModal())}
            >
              <span className="user__name">{user?.displayName}</span>
              <span className="user__icon">
                <MdKeyboardArrowDown />
              </span>
            </div>
          )}

          {isLogoutOpen && (
            <div className="user__logout-box">
              <button className="user__logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="user__theme">
          {mode === "light" ? (
            <span className="user__dark" onClick={() => dispatch(toggleMode())}>
              <PiMoonFill className="user__icon" />
            </span>
          ) : (
            <span
              className="user__light"
              onClick={() => dispatch(toggleMode())}
            >
              <PiSunFill className="user__icon" />
            </span>
          )}
        </div>

        {!user && (
          <button
            className="user__btn"
            onClick={() => dispatch(openLoginModal())}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
