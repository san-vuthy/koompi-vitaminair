import React, { useState } from 'react';
import { Col, Row, Form, Button, Input, Upload, message } from 'antd';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../../Layouts/tool';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_INITATION } from '../../../graphql/mutation';
import { GET_INITATIONS } from '../../../graphql/query';
import addFile from '../../../assets/undraw_Add_files_re_v09g.png';

const AddInitation = () => {
  const instanceRef = React.useRef(null);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    imageUrl: null,
    loading: false,
  });
  const [data, setData] = React.useState({
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
  const [loading, setLoading] = useState(false);
  const [add_initation] = useMutation(ADD_INITATION);
  const { refetch } = useQuery(GET_INITATIONS);
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
  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(JSON.stringify(savedData));
    await setData(savedData);
    // instanceRef.current.clear();
  }
  const uploadButton = (
    <div>
      {/* {state.loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div className="ant-upload-text">
        <img style={{ maxWidth: '100%' }} src={addFile} alt="img" />
      </div>
    </div>
  );
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
    add_initation({
      variables: {
        title: title,
        des: JSON.stringify(data),
        image: state.imageUrl,
      },
    }).then(async (res) => {
      setLoading(true);
      await message.success('Successfull');
      form.resetFields();
      setState({
        imageUrl: null,
        loading: false,
      });
      await refetch();
      setLoading(false);
    });
  };
  return (
    <React.Fragment>
      <div className="contenContainer">
        <h1 className="title-top">Add Initation</h1>
        <Form
          form={form}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Row gutter={[32, 0]}>
            <Col span={16}>
              <Form.Item
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
                label="Description"
                name="des"
                rules={[
                  {
                    required: true,
                    message: 'Please input Description!',
                  },
                ]}
              >
                {/* <Input.TextArea className="input-style" size="large" /> */}
                <EditorJs
                  tools={EDITOR_JS_TOOLS}
                  placeholder="Please input Description"
                  instanceRef={(instance) => (instanceRef.current = instance)}
                />
              </Form.Item>
              {/* <EditorJs tools={EDITOR_JS_TOOLS} /> */}
              <br></br>
              <Form.Item>
                <Button
                  onClick={handleSave}
                  className="submit-button"
                  // type="primary"
                  htmlType="submit"
                  size="large"
                  // className="standard-btn"
                >
                  {loading ? <small>loading...</small> : <small>Submit</small>}
                </Button>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                <React.Fragment>
                  <Form.Item name="image">
                    <Upload.Dragger
                      name="file"
                      // listType="picture-card"
                      className="avatar-uploader"
                      // showUploadList={false}
                      action="https://backend.vitaminair.org/upload/images"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {state.imageUrl ? (
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
                      ) : (
                        uploadButton
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

export default AddInitation;
