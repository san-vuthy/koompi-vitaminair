import React from 'react';
import moment from 'moment';
import { Spin, Table, Tag, message, Popconfirm } from 'antd';
import { BsTrash } from 'react-icons/bs';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DONATIONS } from '../../graphql/query';
import { DELETE_DONATIONER, UPDATE_CONTACT } from '../../graphql/mutation';

const Donationers = () => {
  const { loading, data, refetch } = useQuery(GET_DONATIONS);
  const [delete_donationer] = useMutation(DELETE_DONATIONER);
  const [updateContact] = useMutation(UPDATE_CONTACT);
  if (loading || !data) {
    return (
      <center style={{ marginTop: '100px' }}>
        <Spin tip="Loading ..." />
      </center>
    );
  }

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      render: (phone) => {
        if (!phone) {
          return 'N/A';
        }
        return phone;
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Trees',
      key: 'tree',
      dataIndex: 'tree',
    },
    {
      title: 'Donate for',
      key: 'donate-for',
      dataIndex: 'selectType',
    },
    {
      title: 'Contact',
      key: 'isContact',
      dataIndex: 'isContact',
      render: (record, data) => {
        return record ? (
          <span
            className="is-contact yes"
            onClick={() =>
              updateContact({
                variables: {
                  id: data.id,
                  isContact: false,
                },
              }).then((res) => {
                message.success(res.data.updateContact.message);
                refetch();
              })
            }
          >
            Done
          </span>
        ) : (
          <span
            className="is-contact no"
            onClick={() =>
              updateContact({
                variables: {
                  id: data.id,
                  isContact: true,
                },
              }).then((res) => {
                message.success(res.data.updateContact.message);
                refetch();
              })
            }
          >
            Not Yet
          </span>
        );
      },
    },
    {
      title: 'Donated Date',
      dataIndex: 'create_at',
      render: (create_at) => {
        return moment.unix(create_at / 1000).format('Do MMM YYYY');
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (index, data) => {
        const { id } = data;
        // console.log("id", id);
        return (
          <div>
            {/* <Divider type="vertical" /> */}
            <Popconfirm
              placement="top"
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
                  style={{ marginTop: '6px' }}
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

  // function onChange(pagination, filters, sorter, extra) {
  //   console.log('params', pagination, filters, sorter, extra);
  // }
  return (
    <div>
      <div className="contenContainer">
        <h1 className="title-top">Contributors</h1>
        <div>
          <Table
            columns={columns}
            dataSource={data.get_donations}
            // onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Donationers;
