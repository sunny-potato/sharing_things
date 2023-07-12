import { useState } from "react";
import { loginInfo, accountInfo, userInfo } from "../data/dataTypes";
import { createNewUser, isUserNameActive } from "../data/Axios";

type FieldValidation = Record<string, string>;

function Signup() {
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    username: "",
    password: "",
  });
  const [accountInfo, setAccountInfo] = useState<accountInfo>({
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    address: "",
  });
  const [loginInfoErrors, setIsLoginInfoValid] = useState<FieldValidation>({});
  const [isAccountInfoValid, setIsAccountInfoValid] = useState<FieldValidation>(
    {}
  );

  function loginEventHandler(key: string, value: string) {
    setLoginInfo({ ...loginInfo, [key]: value });
  }
  function accountEventHandler(key: string, value: string) {
    setAccountInfo({ ...accountInfo, [key]: value });
  }

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const loginValidation = checkLoginInfoValidation();
    setIsLoginInfoValid(loginValidation);
    const accountValidation = checkAccountInfoValidation();
    setIsAccountInfoValid(accountValidation);

    const isDataValid =
      Object.keys(loginValidation).length === 0 &&
      Object.keys(accountValidation).length === 0;
    if (isDataValid) {
      const isUsernameActive = await isUserNameActive(loginInfo.username);
      if (isUsernameActive) {
        setIsLoginInfoValid({
          ...loginInfoErrors,
          ["username_exist"]: "username already exists",
        });
      } else {
        const userInfo = { ...loginInfo, ...accountInfo };
        createNewUser(userInfo);
      }
    }
  }

  function checkLoginInfoValidation(): FieldValidation {
    let invalidData = {};
    if (loginInfo.username.length < 5) {
      invalidData = {
        ...invalidData,
        ["username"]: "username should be at least 5 characters in length",
      };
    }
    if (loginInfo.password.length < 5) {
      invalidData = {
        ...invalidData,
        ["password"]: "password should be at least 5 characters in length",
      };
    }
    return invalidData;
  }

  function checkAccountInfoValidation() {
    const timeDifference =
      (new Date().getTime() - new Date(accountInfo.birthdate).getTime()) /
      (1000 * 60 * 60 * 24);

    let invalidData: Record<string, string> = {};
    if (!accountInfo.firstname || !accountInfo.lastname) {
      invalidData.name = "it should have both first- and lastname";
    }
    if (!accountInfo.email) {
      invalidData = {
        ...invalidData,
        ["email"]: "email should not be empty",
      };
    }

    if (!accountInfo.birthdate) {
      invalidData = {
        ...invalidData,
        ["birthdate"]: "it should not be empty",
      };
    }
    if (timeDifference <= 0) {
      invalidData = {
        ...invalidData,
        ["birthdate_diff"]: "birthdate can not be later than today",
      };
    }
    // if (!accountInfo.email.includes("@")) {
    //   invalidData = {
    //     ...invalidData,
    //     ["email_form"]: "it should include @",
    //   };
    // }
    return invalidData;
  }
  function findObject(name: string) {
    return loginInfoErrors[name] && <div>{loginInfoErrors[name]}</div>;
  }

  return (
    <>
      <div>this is signup</div>
      <div>* should be not empty</div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username* : </label>
          <input
            type="text"
            name="username"
            value={loginInfo.username}
            onChange={(event) =>
              loginEventHandler("username", event.currentTarget.value)
            }
          />
        </div>
        {/* {findObject("username")} */}
        {/* {Object.entries(loginInfoErrors).map((object) => {
          if (object[0] === "username")
            return <div key="username">{object[1]}</div>;
        })} */}
        {loginInfoErrors.username && <div>{loginInfoErrors.username}</div>}
        {loginInfoErrors.username_exist && (
          <div>{loginInfoErrors.username_exist}</div>
        )}
        <div>
          <label htmlFor="password">Password* : </label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={(event) =>
              loginEventHandler("password", event.currentTarget.value)
            }
          ></input>
          {Object.entries(loginInfoErrors).map((object) => {
            if (object[0] === "password")
              return <div key="password">{object[1]}</div>;
          })}
        </div>
        <div>
          <label htmlFor="firstname">Firstname* : </label>
          <input
            type="text"
            name="firstname"
            value={accountInfo.firstname}
            onChange={(event) => {
              accountEventHandler("firstname", event.currentTarget.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="lastname">Lastname* : </label>
          <input
            type="text"
            name="lastname"
            value={accountInfo.lastname}
            onChange={(event) => {
              accountEventHandler("lastname", event.currentTarget.value);
            }}
          ></input>
          {Object.entries(isAccountInfoValid).map((object) => {
            if (object[0] === "name") return <div key="name">{object[1]}</div>;
          })}
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate* : </label>
          <input
            type="date"
            name="birthdate"
            value={accountInfo.birthdate}
            onChange={(event) => {
              accountEventHandler("birthdate", event.currentTarget.value);
            }}
          ></input>
          {Object.entries(isAccountInfoValid).map((object) => {
            if (object[0] === "birthdate")
              return <div key="birthdate">{object[1]}</div>;
            if (object[0] === "birthdate_diff")
              return <div key="birthdate_diff">{object[1]}</div>;
          })}
        </div>
        <div>
          <label htmlFor="email">Email* : </label>
          <input
            type="email"
            name="email"
            value={accountInfo.email}
            onChange={(event) => {
              accountEventHandler("email", event.currentTarget.value);
            }}
          ></input>
          {Object.entries(isAccountInfoValid).map((object) => {
            if (object[0] === "email")
              return <div key="email">{object[1]}</div>;
          })}
        </div>
        <div>
          <label htmlFor="address">Address : </label>
          <input
            type="text"
            name="address"
            value={accountInfo.address}
            onChange={(event) => {
              accountEventHandler("address", event.currentTarget.value);
            }}
          ></input>
        </div>
        <input type="submit" value="Sign up"></input>
      </form>
    </>
  );
}

export default Signup;
