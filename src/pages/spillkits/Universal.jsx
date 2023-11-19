import HeroPagesforSpillKits from "../../components/HeroPagesforSpillKits";
import Universal10L from "../../components/product-pages/universal/10L";
import Universal15L from "../../components/product-pages/universal/15L";
import Universal30L from "../../components/product-pages/universal/30L";
import Universal50L from "../../components/product-pages/universal/50L";
import Universal75L from "../../components/product-pages/universal/75L";
import Universal120L from "../../components/product-pages/universal/120L";
import BookKit from "../../components/BookKit";
import Footer from "../../components/Footer";

function Universal() {
  return (
    <>
      <section className="universal-page">
        <HeroPagesforSpillKits name="Universal" />
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
                Universal Spill Kits
              </h4>
              <h2 style={{ fontSize: "4.2rem", marginBottom: "1.4rem" }}>
                All-in-One Spill Readiness
              </h2>
            </div>
            <Universal10L />
            <Universal15L />
            <Universal30L />
            <Universal50L />
            <Universal75L />
            <Universal120L />
          </div>
        </div>
        <BookKit />
        <Footer />
      </section>
    </>
  );
}

export default Universal;
