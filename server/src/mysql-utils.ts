import pool from "./mysql-pool";

export function query(sql: string, values: (string | number)[] = []) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
