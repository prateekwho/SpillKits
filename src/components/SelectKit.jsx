import "./SelectKit.css";
import Spill from "../images/select/spill.png";
import Contact from "../images/select/customer-operator.png";
import CleanIt from "../images/select/cleanit.png";

function SelectKit() {
  return (
    <>
      <section className="select-section">
        <div className="container">
          <div className="select-container">
            <div className="select-container__title">
              <h3>Quick and Easy Purchasing</h3>
              <h2>Buy now with just a few clicks!</h2>
            </div>
            <div className="select-container__boxes">
              <div className="select-container__boxes__box">
                <img src={Spill} alt="icon_img" />
                <h3>Select Kit</h3>
                <p>
                  Choose from our wide range of spill kits to keep your
                  workplace safe and compliant.
                </p>
              </div>

              <div className="select-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Get in touch with our knowledgeable and friendly operators for
                  assistance with any questions or concerns.
                </p>
              </div>

              <div className="select-container__boxes__box">
                <img src={CleanIt} alt="icon_img" />
                <h3>Clean it up!</h3>
                <p>
                  Quickly and effectively clean up spills with our high-quality
                  spill kits designed for easy use and disposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectKit;
