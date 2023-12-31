import pool from "./mysql-pool";
import { query } from "./mysql-utils";
// import { userInfo } from "../../client/src/data/dataTypes";

export type userInfo = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  address: string;
  userId: number;
};

export function getAllLogin() {
  return query("SELECT * FROM user_login");
}

export function createNewLogin(userInfo: Omit<userInfo, "userId">) {
  return query("INSERT INTO user_login SET username=?, password=?", [
    userInfo.username,
    userInfo.password,
  ]);
}
export function createNewAccount(userInfo: userInfo) {
  return query(
    "INSERT INTO user_account SET firstname=?, lastname=?, birthdate=?, email=?, address=?, userId=?",
    [
      userInfo.firstname,
      userInfo.lastname,
      userInfo.birthdate,
      userInfo.email,
      userInfo.address,
      String(userInfo.userId),
    ]
  );
}

export function filterDataBySearchKeyword(keyword: any) {
  return query(
    `SELECT * FROM products as p WHERE p.title LIKE "%${keyword}%" OR p.description LIKE "%${keyword}%" OR p.brand LIKE "%${keyword}%"`
  );
}

// export function createNewAccount(userInfo: any) {
//   return query(
//     "SELECT user_login.*, user_account.* from user_login INNER JOIN user_account ON user_login.userId=user_account.userId"
//   );
// }

// export function getAllProducts() {
//   return query("SELECT * FROM products");
// }

// export function getAllProducts(data: any) {
//   return query(
//     "INSERT INTO products SET title=?, desciription=?, rating=?, stock=?, brand=?, category=?, thumbnail=?, images=? ",
//     [
//       data.title,
//       data.desciription,
//       data.rating,
//       data.stock,
//       data.brand,
//       data.category,
//       data.thumbnail,
//       data.images,
//     ]
//   );
// }
