import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

// styles
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" className="logo__img" />
    </Link>
  );
};

export default Logo;
