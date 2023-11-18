import { Link } from "react-router-dom";
import "./HeroPages.css";

function HeroPagesforSpillKits({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/spillkits">Spill Kits</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPagesforSpillKits;
