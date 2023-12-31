import express from "express";
// import query from "./query";
// import mysql from "mysql2";
import routerSignInUp from "./router-signinup";
import routerProducts from "./router-products";
import path from "path";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use("/", routerSignInUp);
server.use("/", routerProducts);

// server.use(express.static(path.join(__dirname, "/../../client")));

// server.get("/", (req: express.Request, res: express.Response) => {
//   query().then((result) => res.send(result));
// });

const port = 8000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
  console.log("--------------------");
});
