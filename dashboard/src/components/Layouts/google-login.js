import { message } from 'antd';
import axios from 'axios';
import Cookie from 'js-cookie';
import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
// import { refreshTokenSetup } from "../utils/refreshToken";

const config = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

function MyGoogleLogin() {
  const [isLoading, setLoading] = useState(false);

  const onSuccess = async (response) => {
    await axios
      .post(
        `https://accounts.koompi.com/login-with-google`,
        {
          tokenId: response.tokenId,
        },
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
        setLoading(false);
        console.error(error);
      });
  };

  const onFailure = (res) => {
    console.error('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,

    // isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button className="login-with-facebook" onClick={signIn}>
      <span className="buttonText">
        <img
          src="/images/google.png"
          alt="google login"
          className="icon"
          height="25px"
        />{' '}
        <span>{isLoading ? <div>Loading ... </div> : 'Google'}</span>
      </span>
    </button>
  );
}

export default MyGoogleLogin;
