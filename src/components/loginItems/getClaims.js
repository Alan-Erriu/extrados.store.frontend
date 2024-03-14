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
