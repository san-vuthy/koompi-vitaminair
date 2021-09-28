import React, { useState } from 'react';
import { Input, Button, message, Form } from 'antd';
import { useMutation } from '@apollo/client';
import Cookie from 'js-cookie';
import { LOGIN } from '../../graphql/mutation';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    axios
      .post(
        `https://accounts.koompi.com/login`,
        { ...values },
        { withCredentials: true }
      )
      .then(async (res) => {
        setLoading(true);
        const { access_token, refresh_token, role } = res.data;
        if (role === 'admin') {
          Cookie.set('access_token', access_token, { expires: 15 * 60 * 1000 }); // a_token expired 15mn
          Cookie.set('refresh_token', refresh_token, { expires: 7 }); // r_token expired 7days
          await message.success(res.data.message);
          setLoading(false);
          window.location.replace('/');
        } else {
          setLoading(false);
          message.error('Authorization failed, access denied');
        }
      })
      .catch((error, res) => {
        console.log('res', error);
        message.error('Invalid Credentials!');
      });
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="background_image">
          <h2 className="position_login">Login as Admin</h2>
        </div>
        <Form
          style={{ background: '#43c07924' }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {/* =================== Email ================= */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'ការបញ្ចូលមិនមានអ៊ីមែលត្រឹមត្រូវ',
              },
              {
                required: true,
                message: 'Please input your Email',
              },
            ]}
          >
            <Input placeholder="Email" type="email" className="login-input" />
          </Form.Item>

          {/* =================== Password ================= */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password',
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              type="password"
              className="login-input"
            />
          </Form.Item>

          {/* =================== Remember and Forgot password ================= */}
          {/* <Link className="login-form-forgot" to="/forgot-password">
            ភ្លេចពាក្យសម្ងាត់
          </Link> */}
          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            className="margin-botton-8"
          >
            <Checkbox>Remember </Checkbox>
          </Form.Item> */}

          {/* =================== Button Submit ================= */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={loading ? true : false}
              loading={loading ? true : false}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="big-banner"></div>
    </div>
  );
};

export default Login;
