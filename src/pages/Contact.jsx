import Footer from "../components/Footer";
import BookKit from "../components/BookKit";
import HeroPages from "../components/HeroPages";
import "../components/Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                20+ years of experience in spill kit development and a
                commitment to quality and innovation. Trust us to provide spill
                kits that meet your needs and exceed your expectations.
              </p>
              <div>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:9958086311">&nbsp; 9958086311,</a>
                <a href="tel:8588976857">&nbsp; 8588976857</a>
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:industrialcare@hotmail.com">
                  &nbsp; industrialcare@hotmail.com
                </a>
              </div>
              <div>
                <h5>Industrial Care</h5>
              </div>
              <div>
                <span>Sales Office</span>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <a href="https://goo.gl/maps/NdFn7pAUb8QpkbKDA">
                  &nbsp; 243, GF ShopNo. 13 & 14, Prakash Market, Phatak Karor,
                  Ajmeri Gate, Delhi -110006
                </a>
              </div>
              <div>
                <span>Register Office</span>
              </div>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <a href="http://maps.google.com/?q=11/94 Geeta Colony Near Kanchan Studio Delhi-110031">
                  &nbsp; 11/94, Geeta Colony, <br /> New Delhi - 110031
                </a>
              </div>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "John Smith"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  );
}

export default Contact;
