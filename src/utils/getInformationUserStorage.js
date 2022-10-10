export const getInformationUserStorage = () =>
  JSON.parse(localStorage.getItem("user_data"))?.user;
