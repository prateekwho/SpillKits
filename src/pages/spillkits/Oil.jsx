import HeroPagesforSpillKits from "../../components/HeroPagesforSpillKits";
import Oil10L from "../../components/product-pages/oil/10L";
import Oil15L from "../../components/product-pages/oil/15L";
import Oil30L from "../../components/product-pages/oil/30L";
import Oil50L from "../../components/product-pages/oil/50L";
import Oil75L from "../../components/product-pages/oil/75L";
import Oil120L from "../../components/product-pages/oil/120L";
import BookKit from "../../components/BookKit";
import Footer from "../../components/Footer";

function Oil() {
  return (
    <>
      <section className="oil-page">
        <HeroPagesforSpillKits name="Oil" />
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
                Oil Spill Kits
              </h4>
              <h2 style={{ fontSize: "4.2rem", marginBottom: "1.4rem" }}>
                Prepare for Oil Spills with our Comprehensive Kits
              </h2>
            </div>
            <Oil10L />
            <Oil15L />
            <Oil30L />
            <Oil50L />
            <Oil75L />
            <Oil120L />
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  );
}

export default Oil;
