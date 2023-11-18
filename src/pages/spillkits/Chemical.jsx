import HeroPagesforSpillKits from "../../components/HeroPagesforSpillKits";
import Chemical10L from "../../components/product-pages/chemical/10L";
import Chemical15L from "../../components/product-pages/chemical/15L";
import Chemical30L from "../../components/product-pages/chemical/30L";
import Chemical50L from "../../components/product-pages/chemical/50L";
import Chemical75L from "../../components/product-pages/chemical/75L";
import Chemical120L from "../../components/product-pages/chemical/120L";
import BookKit from "../../components/BookKit";
import Footer from "../../components/Footer";

function Chemical() {
  return (
    <>
      <section className="chemical-page">
        <HeroPagesforSpillKits name="Chemical" />
        <div className="container">
          <div
            style={{
              backgroundColor: "#ffffff",
              paddingTop: "10rem ",
              color: "#010103",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                textAlign: "center",
                maxWidth: "70rem",
                marginBottom: "5rem",
              }}
            >
              <h4
                style={{
                  fontSize: "2.2rem",
                  fontFamily: "Rubik, sans-serif",
                  fontWeight: "500",
                }}
              >
                Chemical Spill Kits
              </h4>
              <h2 style={{ fontSize: "4.2rem", marginBottom: "1.4rem" }}>
                Stay Prepared and Minimize Risk with our Chemical Spill Kits
              </h2>
            </div>
            <Chemical10L />
            <Chemical15L />
            <Chemical30L />
            <Chemical50L />
            <Chemical75L />
            <Chemical120L />
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  );
}

export default Chemical;
