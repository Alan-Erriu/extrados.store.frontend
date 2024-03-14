export const getLocalCredentialsUser = () => {
  const user = {
    userId: localStorage.getItem("userId"),
    userName: localStorage.getItem("userName"),
    userEmail: localStorage.getItem("userEmail"),
    userRole: localStorage.getItem("userRole"),
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
  return user;
};
