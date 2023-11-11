import HeroPages from "../components/HeroPages";
import Testimonial from "../components/Testimonial";
import BookKit from "../components/BookKit";
import Footer from "../components/Footer";

function TestimonialPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonial" />
        <Testimonial />
        <BookKit />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialPage;
