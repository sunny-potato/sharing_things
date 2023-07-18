import axios from "axios";
import { userInfo, loginInfo } from "../data/dataTypes";
axios.defaults.baseURL = "http://localhost:8000";

export async function isLoginMatched(loginInfo: loginInfo) {
  const response = await axios.get(
    `/login?username=${loginInfo.username}&password=${loginInfo.password}`
  );
  // console.log("axios result", response);
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
  await axios.post("/signup", accountInfo);
}

export async function filterDataBySearchKeyword(keyword: string) {
  const response = await axios.get(`/search?keyword=${keyword}`);
  return response.data;
}

// export async function getAllProducts() {
//   const response = await axios.get("/");
//   // console.log("axiso response - ", response.data);
//   return response.data;
// }

// export async function getAllProducts() {
//   const response = await axios.get("https://dummyjson.com/products?limit=0");
//   console.log(response.data.products);
//   return response.data.products;
// }
// export async function saveAllProducts(data: []) {
//   const response = await axios.post("/", data);
// }
