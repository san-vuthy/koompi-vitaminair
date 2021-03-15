import React from "react";
import moment from "moment";
import { Layout, Table, Tag, Divider, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { BsTrash, BsPencil } from "react-icons/bs";
import LeftNavbar from "../../Layouts/leftNavbar";
import TopNavbar from "../../Layouts/topNavbar";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ABOUTS } from "../../../graphql/query";
import { DELETE_ABOUT } from "../../../graphql/mutation";
import FooterDashboard from "../../Layouts/footer";
import Output from "editorjs-react-renderer";

const { Content } = Layout;
const AllAbout = () => {
  const { loading, data, refetch } = useQuery(GET_ABOUTS);
  const [delete_about] = useMutation(DELETE_ABOUT);
  if (loading) return null;
  console.log(data);
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      render: (data) => {
        return data.length <= 25 ? data : data.substring(0, 25) + " ...";
      },
    },
    {
      title: "Description",
      key: "des",
      dataIndex: "des",
      render: (data) => {
        // return data.length <= 25 ? data : data.substring(0, 25) + " ...";
        const result = <Output data={JSON.parse(data)} />;
        // return data.length <= 25 ? data : data.substring(0, 25) + " ...";
        return `${result.props.data.blocks[0].data.text.substring(0, 50)}...`;
      },
    },
    {
      title: "Date",
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
        return (
          <div>
            <Link to={`/admin/edit-about/${id}`}>
              <Tag className="edit-button">
                <BsPencil
                  color="rgb(32, 166, 147)"
                  size="20px"
                  style={{ marginTop: "6px" }}
                />
              </Tag>
            </Link>
            <Divider type="vertical" />
            <Popconfirm
              placement="topRight"
              title="Are you sure to delete?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => {
                delete_about({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.delete_about.message);
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

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <TopNavbar />
          <Content style={{ backgroundColor: "#fff" }}>
            <div className="contenContainer">
              <h1 className="title-top">Abouts</h1>
              <div>
                <Table columns={columns} dataSource={data.get_abouts} />
              </div>
            </div>
          </Content>
          <FooterDashboard />
        </Layout>
      </Layout>
    </div>
  );
};

export default AllAbout;
