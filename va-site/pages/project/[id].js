import { useQuery } from "@apollo/client";
import React from "react";
import Footer from "../../components/footer";
import { GET_PROJECTS, GET_PROJECT } from "../../graphql/query";
import { useRouter } from "next/router";
import Output from "editorjs-react-renderer";
import { Spin } from "antd";
function ProjectSlug() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_PROJECT, {
    variables: {
      id,
    },
  });
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <Spin></Spin>
      </center>
    );

  const { title, des, image } = data.get_project;

  return (
    <React.Fragment>
      <div className="container">
        <div className="single-background">
          <center>
            <img
              className="project-image-icon"
              src={"https://backend.vitaminair.org/public/uploads/" + image}
              alt="img"
            />
          </center>
          <div className="single-content">
            <h3 className="modals">{title}</h3>
            <Output data={JSON.parse(des)} />
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default ProjectSlug;
