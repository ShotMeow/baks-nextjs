export const logOut = () => {
  localStorage.removeItem("jwtToken");
  window.dispatchEvent(new Event("storage"));
};
