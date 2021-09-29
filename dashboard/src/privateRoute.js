import React from 'react';
import jwt from 'jsonwebtoken';
import Cookie from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';
import LeftNavbar from './components/Layouts/leftNavbar';
import TopNavbar from './components/Layouts/topNavbar';
import FooterDashboard from './components/Layouts/footer';
import { Layout } from 'antd';

const { Content } = Layout;

let token = Cookie.get('access_token');
let decode_token = jwt.decode(token);

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = () => {
    if (decode_token) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Layout style={{ minHeight: '100vh' }}>
            <LeftNavbar />
            <Layout className="site-layout">
              <TopNavbar />
              <Content style={{ backgroundColor: '#fff' }}>
                <Component {...props} />
              </Content>
              <FooterDashboard />
            </Layout>
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    /*{ <Route
      {...rest}
      render={(props) =>
        isLogin() ? <h1>Login success</h1>: <Redirect to="/login" />
    }/> }*/
  );
};

export default PrivateRoute;
