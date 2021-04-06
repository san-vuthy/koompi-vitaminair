import React from "react";
// import { Layout } from "antd";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// const { Content } = Layout;

const AllLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default AllLayout;
