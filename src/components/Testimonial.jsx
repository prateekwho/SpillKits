import Default from "../images/testimonial/default_profile.png";

import "./Testimonial.css";

function Testimonial() {
  return (
    <>
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonial</h2>
              <p>
                Read our clients' testimonial and discover the positive impact
                we've made. They've experienced our exceptional service and
                results firsthand and are excited to share their satisfaction
                with you.
              </p>
            </div>

            <div className="all-testimonial">
              <div className="all-testimonial__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "These spill kits have exceeded our expectations. They are
                  well-designed, easy to use, and the cleanup process is a
                  breeze. Our team feels more confident and prepared with these
                  kits on hand. We highly recommend them."
                </p>
                <div className="all-testimonial__box__name">
                  <div className="all-testimonial__box__name__profile">
                    <img src={Default} alt="user_img" />
                    <span>
                      <h4>Aarav Patel</h4>
                      <p>EcoGuard Industries LLP.</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonial__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We've been using these spill kits for a while now, and they
                  never disappoint. They are reliable, efficient, and have
                  become an essential part of our safety protocols. We couldn't
                  be happier with the results and the level of support we've
                  received from the team"
                </p>
                <div className="all-testimonial__box__name">
                  <div className="all-testimonial__box__name__profile">
                    <img src={Default} alt="user_img" />
                    <span>
                      <h4>Aisha Sharma</h4>
                      <p>GreenEarth Chemicals Pvt. Ltd.</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
