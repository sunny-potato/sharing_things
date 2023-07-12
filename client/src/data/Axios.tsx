import axios from "axios";
import { userInfo } from "../data/dataTypes";
axios.defaults.baseURL = "http://localhost:8000";

export async function getAllLogin() {
  const response = await axios.get("/login");
  return response.data;
}
export async function isUserNameActive(userName: string) {
  const response = await axios.get(`/signup?username=${userName}`);
  return response.data;
}

// export async function createNewLogin(loginInfo: loginInfo) {
//   const response = await axios.post("/signup", loginInfo);
//   console.log("axios response - ", response);
// }

export async function createNewUser(accountInfo: userInfo) {
  const response = await axios.post("/signup", accountInfo);
  console.log(response.data);
}
