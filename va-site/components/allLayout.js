import React from "react";
// import { Layout } from "antd";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// const { Content } = Layout;

const AllLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default AllLayout;
