import Logo from "../logo/Logo";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import tmdbLogo from "../../assets/tmdb-logo.svg";

// styles
import "./Footer.scss";

const Footer = () => {
  return (
    <article className="footer-article">
      <div className="footer container">
        <div className="footer__content">
          <div className="footer__logo-box">
            <Logo />
          </div>

          <ul className="footer__links">
            <li>
              <a href="#" target="_blank" className="link">
                <FaFacebookF className="footer__icon" />
              </a>
            </li>

            <li>
              <a href="#" target="_blank" className="link">
                <FaXTwitter className="footer__icon" />
              </a>
            </li>

            <li>
              <a href="#" target="_blank" className="link">
                <FaLinkedinIn className="footer__icon" />
              </a>
            </li>
          </ul>

          <div className="footer__terms">
            <span className="footer__term">Terms & Conditions</span>
            <span className="footer__privacy">Privacy Policy</span>
            <Link to="/contact" className="footer__nav">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer__rule" />

        <div className="footer__rights">
          <p className="footer__reserved">
            &copy; {new Date().getFullYear()} Kmovies. All rights reserved.
          </p>

          <div className="footer__tmdb-box">
            <a
              target="_blank"
              href="https://www.themoviedb.org/"
              className="footer__tmdb-link"
            >
              <img
                src={tmdbLogo}
                alt="tmdb logo"
                className="footer__tmdb-logo"
              />
            </a>
            <p className="footer__tmdb-text">Kmovies uses the TMDB api.</p>
          </div>

          <div className="footer__built-by">
            <span>Built by</span>{" "}
            <a href="#" target="_blank" className="footer__dev">
              Kanyun Ngere
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Footer;
