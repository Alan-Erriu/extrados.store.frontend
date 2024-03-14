export const setLocalUserCredentials = (user) => {
  localStorage.setItem("userId", user.userId);
  localStorage.setItem("userName", user.userName);
  localStorage.setItem("userEmail", user.userEmail);
  localStorage.setItem("userRole", user.userRole);
  localStorage.setItem("accessToken", user.accessToken);
  localStorage.setItem("refreshToken", user.refreshToken);
};
