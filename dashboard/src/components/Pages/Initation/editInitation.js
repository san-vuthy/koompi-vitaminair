import React, { useState } from 'react';
import { Col, Row, Form, Button, Input, Upload, message, Spin } from 'antd';

import { useMutation, useQuery } from '@apollo/client';
import { EDIT_INITATION } from '../../../graphql/mutation';
import { GET_INITATION } from '../../../graphql/query';
import { useParams } from 'react-router-dom';
import { EDITOR_JS_TOOLS } from '../../Layouts/tool';
import EditorJs from 'react-editor-js';

const EditInitation = ({ history }) => {
  const instanceRef = React.useRef(null);
  const [datas, setData] = React.useState({
    time: 1556098174501,
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Editor.js',
          level: 2,
        },
      },
    ],
  });
  const { id } = useParams();
  const [form] = Form.useForm();
  const [state, setState] = useState({
    imageUrl: null,
    loading: false,
  });
  const [loading] = useState(false);
  const {
    loading: initationLoading,
    data: initationsData,
    refetch: initationrefetch,
  } = useQuery(GET_INITATION, {
    variables: { id },
  });
  const [edit_initation] = useMutation(EDIT_INITATION);

  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(JSON.stringify(savedData));
    await setData(savedData);
    // instanceRef.current.clear();
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      setState({
        imageUrl: info.file.response.data,
        loading: false,
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const onFinish = (values) => {
    const { title } = values;
    edit_initation({
      variables: {
        title: title,
        des: JSON.stringify(datas),
        image:
          state.imageUrl === null
            ? initationsData.get_initation.image
            : state.imageUrl,
        id: id,
      },
    }).then(async (res) => {
      await message.success('Successfull');
      //   form.resetFields();
      //   setState({
      //     imageUrl: null,
      //     loading: false,
      //   });
      await initationrefetch();
      await history.push('/admin/blogs');
    });
    console.log(values);
  };
  if (initationLoading) {
    return (
      <center style={{ marginTop: '100px' }}>
        <Spin style={{ color: 'red !important' }} size="large" />
      </center>
    );
  }
  return (
    <React.Fragment>
      <div className="contenContainer">
        <h1 className="title-top">Edit Initation</h1>
        <Form
          form={form}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Row gutter={[32, 0]}>
            <Col span={16}>
              <Form.Item
                initialValue={initationsData.get_initation.title}
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Please input Title!',
                  },
                ]}
              >
                <Input className="input-style" size="large" />
              </Form.Item>
              <Form.Item
                initialValue={JSON.parse(initationsData.get_initation.des)}
                label="Description"
                name="des"
                rules={[
                  {
                    required: true,
                    message: 'Please input Desciption!',
                  },
                ]}
              >
                {/* <Input.TextArea className="input-style" size="large" /> */}
                <EditorJs
                  data={JSON.parse(initationsData.get_initation.des)}
                  tools={EDITOR_JS_TOOLS}
                  instanceRef={(instance) => (instanceRef.current = instance)}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={handleSave}
                  className="submit-button"
                  // type="primary"
                  htmlType="submit"
                  size="large"
                  // className="standard-btn"
                >
                  {loading ? <small>loading...</small> : <small>SUMBIT</small>}
                </Button>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                <React.Fragment>
                  <Form.Item
                    label="Image"
                    initialValue={initationsData.get_initation.image}
                    name="image"
                  >
                    <Upload.Dragger
                      name="file"
                      // listType="picture-card"
                      className="avatar-uploader"
                      // showUploadList={false}
                      action="https://backend.vitaminair.org/upload/images"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {state.imageUrl === null ? (
                        // <img
                        //   src={`${`http://localhost:3500`}/public/uploads/${
                        //     initationsData.get_initation.image
                        //   }`}
                        //   alt="avatar"
                        //   style={{ width: "100%" }}
                        // />
                        <img
                          // src={`${`https://backend.vitaminair.org/`}/public/uploads/${
                          //   state.imageUrl
                          // }`}
                          src={
                            'https://backend.vitaminair.org/public/uploads/' +
                            initationsData.get_initation.image
                          }
                          alt="avatar"
                          style={{ width: '100%' }}
                        />
                      ) : (
                        // <img
                        //   src={`${`http://localhost:3500`}/public/uploads/${
                        //     state.imageUrl
                        //   }`}
                        //   alt="avatar"
                        //   style={{ width: "100%" }}
                        // />
                        <img
                          // src={`${`https://backend.vitaminair.org/`}/public/uploads/${
                          //   state.imageUrl
                          // }`}
                          src={
                            'https://backend.vitaminair.org/public/uploads/' +
                            state.imageUrl
                          }
                          alt="avatar"
                          style={{ width: '100%' }}
                        />
                      )}
                    </Upload.Dragger>
                  </Form.Item>
                </React.Fragment>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default EditInitation;
