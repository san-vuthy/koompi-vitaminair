import React from "react";
import moment from "moment";
import {
  Layout,
  Row,
  Col,
  Spin,
  Table,
  Tag,
  Divider,
  message,
  Popconfirm,
} from "antd";
import { Link } from "react-router-dom";
import { BsTrash, BsPencil } from "react-icons/bs";
import { DeleteOutlined } from "@ant-design/icons";
import LeftNavbar from "../../Layouts/leftNavbar";
import TopNavbar from "../../Layouts/topNavbar";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MEMBERS } from "../../../graphql/query";
import { DELETE_MEMBER } from "../../../graphql/mutation";

const { Content } = Layout;
const AllMembers = () => {
  const { loading, data, error, refetch } = useQuery(GET_MEMBERS);
  const [delete_member] = useMutation(DELETE_MEMBER);
  if (loading)
    return (
      <center style={{ marginTop: "100px" }}>
        <Spin style={{ color: "red !important" }} size="large" />
      </center>
    );
  console.log(data);
  const columns = [
    {
      title: "Image",
      width: 200,
      dataIndex: "image",
      render: (data) => {
        return (
          <img
            // style={{ borderRadius: "20px", border: "2px solid gray" }}
            height="40px"
            width="40px"
            src={"http://localhost:3500/public/uploads/" + data}
            alt="avatar"
            // src={'http://localhost:7002/public/uploads/' + data}
          ></img>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (data) => {
        return data.length <= 25 ? data : data.substring(0, 25) + " ...";
      },
    },
    {
      title: "Position",
      key: "position",
      dataIndex: "position",
      render: (data) => {
        return data.length <= 25 ? data : data.substring(0, 25) + " ...";
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
            <Link to={`/admin/edit-member/${id}`}>
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
                delete_member({ variables: { id: `${id}` } })
                  .then(async (res) => {
                    await message.success(res.data.delete_member.message);
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
              <h1 className="title-top">Members</h1>
              <div>
                <Table
                  columns={columns}
                  dataSource={data.get_members}
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

export default AllMembers;
