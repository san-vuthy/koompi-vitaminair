import React, { useState } from "react";
import { Input, Button, Checkbox, message, Form } from "antd";
import { useMutation } from "@apollo/client";
import jwt from "jsonwebtoken";
import { LOGIN } from "../../graphql/mutation";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [login] = useMutation(LOGIN);

  const onFinish = (values) => {
    login({
      variables: {
        ...values,
      },
    }).then(async (res) => {
      localStorage.setItem("vatoken", res.data.login.token);
      const decoded = jwt.decode(res.data.login.token);
      localStorage.setItem("id", res.data.login.id);
      if (decoded) {
        setLoading(true);
        await message.success(res.data.login.message);
        setLoading(false);
        window.location.replace("/admin/dashboard");
      } else if (!decoded) {
        await message.error("Login failed");
      }
    });
  };
  return (
    <div>
      <div className="loginContainer">
        <div className="background_image">
          <h2 className="position_login">Login to admin account</h2>
        </div>
        <Form
          style={{ background: "#43c07924" }}
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
                type: "email",
                message: "ការបញ្ចូលមិនមានអ៊ីមែលត្រឹមត្រូវ",
              },
              {
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <Input type="email" className="academyInputLarge" />
          </Form.Item>

          {/* =================== Password ================= */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password",
              },
            ]}
          >
            <Input.Password type="password" className="academyInputLarge" />
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
          <center>
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
          </center>
        </Form>
      </div>
    </div>
  );
};

export default Login;
