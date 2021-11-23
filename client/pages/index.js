import { Row, Col, Button } from "antd";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";
import InfoForm from "./home/inforForm";

function Home() {
  return (
    <div className="background-body">
      <NextSeo
        title="Home - Vitaminair"
        description="Protect, preserve, and restore our rain forests for generations ahead. Protect, preserve, and restore our rain forests for generations ahead."
        canonical="https://vitaminair.org"
        openGraph={{
          images: [
            {
              url: "/home.png",
            },
          ],
          url: "https://vitaminair.org",
          site_name: "vitaminair",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <InfoForm />
      <Footer />
    </div>
  );
}

export default Home;
