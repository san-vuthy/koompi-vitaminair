import { useQuery } from "@apollo/client";
import React from "react";
import Footer from "../../components/footer";
import { GET_BLOG_SLUG } from "../../graphql/query";
import { useRouter } from "next/router";
import Output from "editorjs-react-renderer";
import { FlapperSpinner } from "react-spinners-kit";
import { Spin } from "antd";

function BlogDetail() {
  const server = process.env.API_SECRET;
  const server_local = process.env.API_SECRET_LOCAL;
  const develop = process.env.NODE_ENV;

  const URL_ACCESS = develop === "development" ? server_local : server;
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data } = useQuery(GET_BLOG_SLUG, {
    variables: {
      slug,
    },
  });
  if (loading)
    return (
      <center style={{ marginTop: "400px" }}>
        <FlapperSpinner size={50} color="#00ff89" />
      </center>
    );

  const { des, image, title } = data.get_blog_slug;

  return (
    <React.Fragment>
      <div className="container">
        <div className="single-background">
          <center>
            <img
              className="blog-image"
              // src={`${URL_ACCESS}/public/uploads/${image}`}
              src={"https://backend.vitaminair.org/public/uploads/" + image}
              // src={"http://localhost:3600/public/uploads/" + image}
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
