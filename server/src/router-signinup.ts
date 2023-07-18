import express from "express";
import { getAllLogin, createNewLogin, createNewAccount } from "./query";
import { Console } from "console";
// import { loginInfo } from "../../client/src/data/dataTypes";

export type loginInfo = {
  username: string;
  password: string;
};

const router = express.Router();

router.get("/login", async (req: express.Request, res: express.Response) => {
  try {
    const usernameList: any = await getAllLogin();
    const username = req.query.username;
    const password = req.query.password;

    const findUser = usernameList.find(
      (user: loginInfo) =>
        user.username === username && user.password === password
    );

    let isUserFound: boolean = false;
    if (findUser === undefined) {
      isUserFound = false;
    } else if (findUser.length > 1) {
      isUserFound = false;
    } else {
      isUserFound = true;
    }
    // console.log(findUser, isUserFound);
    res.send(isUserFound);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get(`/signup`, async (req: express.Request, res: express.Response) => {
  try {
    const username = req.query.username;
    const usernameList: any = await getAllLogin();
    const isUsernameActive = usernameList.some(
      (each: Record<string, string>) => each.username === username
    );
    res.send(isUsernameActive);
  } catch (error) {
    res.status(500).send(error);
  }
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
    data = { ...data, ["userId"]: loginResult.insertId };
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
