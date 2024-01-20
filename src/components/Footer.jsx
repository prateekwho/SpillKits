import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                Voltech India <span>.</span>
              </li>
              <li>
                Our spill kits offer comprehensive protection from unexpected
                spills. Stay prepared with our high-quality spill containment
                solutions.
              </li>
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/industrial_care/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://wa.link/77gct1" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <p>
                  Privacy Policy | © {new Date().getFullYear()} Voltech India{" "}
                  <br /> Developed by {""}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.prateek.wtf/"
                  >
                    Prateek
                  </a>
                </p>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/spillkits">
                  Spill Kits
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/testimonials">
                  Testimonials
                </Link>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Sat: 10:00AM - 6:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Connect With Us</li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:9958086311" target="_blank">
                  &nbsp; 9958086311
                </a>
                ,
                <a href="tel:8588976857" target="_blank">
                  &nbsp; 8588976857
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a
                  href="mailto: 
                industrialcare@hotmail.com"
                  target="_blank"
                >
                  &nbsp; voltechindia@hotmail.com
                </a>
              </li>
              <li>
                <ul className="footer-content__2__company">
                  <li>Voltech India</li>
                  <li>
                    <span>Register Office</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a
                      href="https://maps.google.com/?q=28.6752497,77.3017465"
                      target="_blank"
                    >
                      &nbsp; 340/2/28, Gali No-1, Friends Colony Industrial Area
                      opp. Mansarovar Park Metro Station Parking, Metro Pillar
                      No 24,
                      <br /> Shahdara, Delhi -110095
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
