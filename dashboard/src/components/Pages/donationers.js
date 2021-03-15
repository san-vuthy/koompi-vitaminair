import React from "react";
import moment from "moment";
import { Layout, Spin, Table, Tag, message, Popconfirm } from "antd";
import { BsTrash } from "react-icons/bs";
import LeftNavbar from "../Layouts/leftNavbar";
import TopNavbar from "../Layouts/topNavbar";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DONATIONS } from "../../graphql/query";
import { DELETE_DONATIONER } from "../../graphql/mutation";
import FooterDashboard from "../Layouts/footer";

const { Content } = Layout;
const Donationers = () => {
  const { loading, data, refetch } = useQuery(GET_DONATIONS);
  const [delete_donationer] = useMutation(DELETE_DONATIONER);
  if (loading)
    return (
      <center style={{ marginTop: "100px" }}>
        <Spin style={{ color: "red !important" }} size="large" />
      </center>
    );
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
    },
    {
      title: "Donate Date",
      dataIndex: "create_at",
      render: (create_at) => {
        return moment.unix(create_at / 1000).format(" Do YYYY, h:mm:ss A");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (index, data) => {
        const { id } = data;
        console.log("id", id);
        return (
          <div>
            {/* <Divider type="vertical" /> */}
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                delete_donationer({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.delete_donationer.message);
                    await refetch();
                  })
                  .catch((error) => {
                    console.log(error);
                    return null;
                  });
              }}
            >
              <Tag className="delete-button">
                {/* <DeleteOutlined /> Delete */}
                <BsTrash
                  color="#ff5858"
                  size="20px"
                  style={{ marginTop: "6px" }}
                />
              </Tag>
              {/* <div className="delete-button">
                <center>
                  <BsTrash
                    color="#ff5858"
                    size="20px"
                    style={{ marginTop: "6px" }}
                  />
                </center>
              </div> */}
            </Popconfirm>
          </div>
        );
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
          <FooterDashboard />
        </Layout>
      </Layout>
    </div>
  );
};

export default Donationers;
