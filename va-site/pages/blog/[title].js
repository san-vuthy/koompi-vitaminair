import { useQuery } from "@apollo/client";
import React from "react";
import Footer from "../../components/footer";
import { GET_BLOG, GET_BLOG_TITLE } from "../../graphql/query";
import { useRouter } from "next/router";
import Output from "editorjs-react-renderer";
import { FlapperSpinner } from "react-spinners-kit";
import { Spin } from "antd";

function BlogDetail() {
  const router = useRouter();
  const { title } = router.query;

  const { loading, data } = useQuery(GET_BLOG_TITLE, {
    variables: {
      title,
    },
  });
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <FlapperSpinner size={50} color="#00ff89" />
      </center>
    );

  const { des, image } = data.get_blog_title;

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

export default BlogDetail;
