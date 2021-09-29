// const Logout = () => {
//   localStorage.removeItem("vatoken");
//   // firebase.auth().signOut();
//   window.location.replace("/login");
// };

// export default Logout;
import { useEffect } from 'react';
import Cookie from 'js-cookie';

const Logout = () => {
  useEffect(() => {
    Cookie.remove('access_token');
    Cookie.remove('refresh_token');
    window.location.replace('/login');
  });
  return null;
};

export default Logout;
