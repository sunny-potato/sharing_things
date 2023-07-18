import express from "express";
import { filterDataBySearchKeyword } from "./query";

const router = express.Router();

// router.get("/", async (req: express.Request, res: express.Response) => {
//   try {
//     const allproducts = await getAllProducts();
//     res.send(allproducts);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

router.get("/search", async (req: express.Request, res: express.Response) => {
  const keyword = req.query.keyword;
  const filteredData = await filterDataBySearchKeyword(keyword);
  res.send(filteredData);
});

export default router;
