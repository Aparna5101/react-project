import axios from "axios";
import { API_URI } from "../../config/apiService";
export const register = (newUser) => {
  return axios
    .post(`${API_URI}/patient/register`, {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  console.log(user);
  return axios
    .post(`${API_URI}/patient/login`, {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
