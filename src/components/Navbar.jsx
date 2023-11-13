import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo/resq-logo.png";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link className="products-link" to="/spillkits">
              Spill Kits
            </Link>
          </li>
          <li>
            {" "}
            <Link className="testi-link" to="/testimonial">
              Testimonials
            </Link>
          </li>
        </ul>
        <div className="navbar__button">
          <Link className="navbar__button__contact" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
