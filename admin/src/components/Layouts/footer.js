import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;
const FooterDashboard = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        <div className="dashboard-footer">
          <b>Vitaminair</b> ©2021 Created by <b>KOOMPI</b>
        </div>
      </Footer>
    </div>
  );
};

export default FooterDashboard;
