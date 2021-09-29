import { message } from 'antd';
import axios from 'axios';
import Cookie from 'js-cookie';
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

// refresh token
// import { refreshTokenSetup } from "../utils/refreshToken";

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

function MyFacebookLogin() {
  const [isLoading, setLoading] = useState(false);

  const responseFacebook = (response) => {
    setLoading(true);
    axios
      .post(
        `https://accounts.koompi.com/login-with-facebook`,
        { accessToken: response.accessToken, userID: response.userID },
        config
      )
      .then(async (res) => {
        setLoading(true);
        const { access_token, refresh_token, role } = res.data;
        if (role === 'admin') {
          Cookie.set('_sid', res.data._id, { expires: 7 });
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
      .catch(async (error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-with-google">
      <FacebookLogin
        appId={process.env.REACT_APP_APP_ID}
        fields="name,email,picture"
        icon={<img src="/images/facebook.png" alt="logo" height="25px" />}
        callback={responseFacebook}
        cssClass="login-with-facebook"
        textButton={
          <span>{isLoading ? <div>Loading ...</div> : 'Facebook'} </span>
        }
      />
    </div>
  );
}

export default MyFacebookLogin;
