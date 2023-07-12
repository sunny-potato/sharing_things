import { useState, useEffect } from "react";
import { getAllLogin } from "../data/Axios";
import { useNavigate, Link } from "react-router-dom";
import { loginInfo } from "../data/dataTypes";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    username: "",
    password: "",
  });
  const [isUserMatched, setIsUserMatched] = useState<boolean>(false);

  function loginEventHandler(key: string, value: string) {
    setLoginInfo({ ...loginInfo, [key]: value });
  }

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const usersList = await getAllLogin();
    const findUser = usersList.find(
      (user: loginInfo) =>
        user.username === loginInfo.username &&
        user.password === loginInfo.password
    );
    if (findUser !== undefined) {
      setIsUserMatched(true);
      navigate("/"); //with login data?????
    } else {
      setIsUserMatched(false);
    }
  }

  return (
    <>
      <div>this is login page</div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            value={loginInfo.username}
            onChange={(event) =>
              loginEventHandler("username", event.currentTarget.value)
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={(event) =>
              loginEventHandler("password", event.currentTarget.value)
            }
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      {!isUserMatched && <div>Invalid username or password</div>}
      <div>have forgotten password?</div>
      <Link to="/signup">
        <div>Want to sign up?</div>
      </Link>
    </>
  );
}

export default Login;
