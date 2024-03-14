import { jwtDecode } from "jwt-decode";

export const getClaims = (credentials) => {
  const decodedToken = jwtDecode(credentials.accessToken);
  const userClaims = {
    userId: decodedToken.nameid,
    userName: decodedToken.name,
    userEmail: decodedToken.email,
    userRole: decodedToken.role,
    accessToken: credentials.accessToken,
    refreshToken: credentials.refreshToken,
  };
  return userClaims;
};

export const setLocalUserCredentials = (user) => {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("userName", user.userName);
  localStorage.setItem("userEmail", user.userEmail);
  localStorage.setItem("userRole", user.userRole);
  localStorage.setItem("accessToken", user.accessToken);
  localStorage.setItem("refreshToken", user.refreshToken);
};

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
