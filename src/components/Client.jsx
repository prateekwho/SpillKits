import "./Client.css";
import Client1 from "../images/client/indian-oil.png";
import Client2 from "../images/client/reliance-industries.png";
import Client3 from "../images/client/gail.png";
import Client4 from "../images/client/adani-wilmar.png";
import Client5 from "../images/client/ongc.jpg";
import Client6 from "../images/client/ntpc.png";
import Client7 from "../images/client/chennai-petroleum.png";

function client() {
  return (
    <>
      <section>
        <div id="client" className="client-section">
          <div className="container">
            <div className="client-container">
              <div className="client-container__title">
                <h4>Powering Success Across India</h4>
                <h2>
                  Trusted by over 10 Lakh marketers at 20,000+ businesses around
                  the India.
                </h2>
              </div>
              <div className="client-container__images">
                <div>
                  <img src={Client1} alt="indian oil" />
                </div>
                <div>
                  <img
                    src={Client2}
                    alt="reliance industries"
                    style={{ height: "9.5rem" }}
                  />
                </div>
                <div>
                  <img src={Client3} alt="gail" />
                </div>
                <div>
                  <img src={Client4} alt="adani wilmar" />
                </div>
                <div>
                  <img src={Client5} alt="ongc" />
                </div>
                <div>
                  <img src={Client6} alt="ntpc" />
                </div>
                <div>
                  <img src={Client7} alt="chennai petroleum" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default client;
