import { useQuery } from "@apollo/client";
import React from "react";
import Footer from "../../components/footer";
import { GET_A_PLANTS } from "../../graphql/query";
import { useRouter } from "next/router";
import Output from "editorjs-react-renderer";
import { Row, Col, Divider } from "antd";
import { FlapperSpinner } from "react-spinners-kit";
function PlantsDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_A_PLANTS, {
    variables: {
      id,
    },
  });
  if (loading)
    return (
      <div style={{ marginTop: "50px" }}>
        <center>
          <FlapperSpinner size={50} color="#00ff89" loading={loading} />
        </center>
      </div>
    );

  const { name, des, image, sciname } = data.get_a_plants;

  return (
    <React.Fragment>
      <div className="container">
        <div className="single-background">
          <center>
            <img
              className="blog-image"
              src={"https://backend.vitaminair.org/public/uploads/" + image}
              alt="img"
            />
          </center>
          <div className="single-content-plants">
            <div className="line-plants-single">
              <div className="dispaly-title">
                <small>
                  <p className="title-localname">Local Name:</p>
                </small>
                <small>
                  <p className="name">{name}</p>
                </small>
              </div>
              <div className="dispaly-title">
                <small>
                  <p className="title-localname">Scientific Name:</p>
                </small>
                <small>
                  <p className="name">{sciname}</p>
                </small>
              </div>
              <div className="dispaly-title">
                <small>
                  <p className="title-localname">Family:</p>
                </small>
                <small>
                  <p className="name">{name}</p>
                </small>
              </div>
            </div>
            <Divider type="horizontal" />
            <Output data={JSON.parse(des)} />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default PlantsDetails;
