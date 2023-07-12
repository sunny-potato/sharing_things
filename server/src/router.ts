import express, { query } from "express";
import { getAllLogin, createNewLogin, createNewAccount } from "./query";

const router = express.Router();

router.get("/login", async (req: express.Request, res: express.Response) => {
  const result = await getAllLogin();
  res.send(result);
  // getAllLogin().then((result) => res.send(result));
});

router.get(`/signup`, async (req: express.Request, res: express.Response) => {
  const username = req.query.username;
  const usernameList: any = await getAllLogin();
  const isUsernameActive = usernameList.some(
    (each: Record<string, string>) => each.username === username
  );
  res.send(isUsernameActive);
});

router.post("/signup", async (req: express.Request, res: express.Response) => {
  let data = req.body;
  if (
    data.username &&
    data.password &&
    data.firstname &&
    data.lastname &&
    data.birthdate &&
    data.email
  ) {
    const loginResult: any = await createNewLogin(data);
    data = await { ...data, ["userId"]: loginResult.insertId };
    const accountResult: any = await createNewAccount(data);
    res.status(200).send("singup is success");
  } else {
    res.status(500).send("missing data");
  }
});
// throw new Error() -> used to check error
// try & catch
// 1) without try & catch : stop the whole server system
// 2) with try & catch, but not error return in catch : server system work as usual, but not show error message in front-end & back-end
// 3) with try & catch including error return : server system work as usual, but show error message in back-end
// 4) with try & catch incdluing response.send : server system work as usual, but show error message in front-end

export default router;
