import { useQuery } from "@apollo/client";
import React from "react";
import Footer from "../../components/footer";
import { GET_A_PLANTS } from "../../graphql/query";
import { useRouter } from "next/router";
import Output from "editorjs-react-renderer";
import { Spin } from "antd";
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
          <Spin tip="Loading ..." />
        </center>
      </div>
    );

  const { name, des, image } = data.get_a_plants;

  return (
    <React.Fragment>
      <div className="container">
        <div className="single-background">
          <center>
            <img
              // className="blog-image"
              src={"https://backend.vitaminair.org/public/uploads/" + image}
              alt="img"
            />
          </center>
          <div className="single-content">
            <h3 className="modals">{name}</h3>
            <Output data={JSON.parse(des)} />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default PlantsDetails;
