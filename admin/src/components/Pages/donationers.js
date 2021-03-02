import React from "react";
import moment from "moment";
import { Layout, Row, Col, Spin, Table, Tag } from "antd";
import LeftNavbar from "../Layouts/leftNavbar";
import TopNavbar from "../Layouts/topNavbar";
import { useQuery } from "@apollo/client";
import { GET_DONATIONS } from "../../graphql/query";

const { Content } = Layout;
const Donationers = () => {
  const { loading, data, error } = useQuery(GET_DONATIONS);
  if (loading) return null;
  console.log(data);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Trees",
      key: "tree",
      dataIndex: "tree",
      sorter: (a, b) => a.tree - b.tree,
      // render: (tree) => (
      //   <>
      //     {tree.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: "Donate Date",
      dataIndex: "create_at",
      render: (create_at) => {
        return moment.unix(create_at / 1000).format(" Do YYYY, h:mm:ss A");
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Donationers</h1>
              <div>
                <Table
                  columns={columns}
                  dataSource={data.get_donations}
                  onChange={onChange}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Donationers;
