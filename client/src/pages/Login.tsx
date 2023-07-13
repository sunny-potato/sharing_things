import { useState, useEffect } from "react";
import { isLoginMatched } from "../data/Axios";
import { useNavigate, Link } from "react-router-dom";
import { loginInfo } from "../data/dataTypes";

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    username: "",
    password: "",
  });
  const [isUserMatched, setIsUserMatched] = useState<boolean>(true);

  function loginEventHandler(key: string, value: string) {
    setLoginInfo({ ...loginInfo, [key]: value });
  }

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const isMatched = await isLoginMatched(loginInfo);
    console.log(isMatched);
    if (isMatched) {
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
