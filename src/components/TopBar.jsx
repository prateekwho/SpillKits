import "../components/TopBar.css";

function TopBar() {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <ul>
              <li>
                <a href="tel:9958086311">
                  <i className="fa-solid fa-phone"></i> &nbsp; 9958086311
                </a>
              </li>
              <li>
                <a
                  href="mailto: 
                industrialcare@hotmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; industrialcare@hotmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-sharp fa-solid fa-clock"></i>
                  &nbsp; Mon - Sat: 10:00AM - 6:00PM
                </a>
              </li>
            </ul>
            <ul className="top-bar__social">
              <li>
                <a href="/" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/industrial_care/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://wa.link/77gct1" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
