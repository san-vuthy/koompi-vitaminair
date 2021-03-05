const Logout = () => {
  localStorage.removeItem("vatoken");
  // firebase.auth().signOut();
  window.location.replace("/login");
};

export default Logout;
