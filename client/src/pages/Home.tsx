import { useState } from "react";
import styles from "../styles/Home.module.css";
import "../styles/Home.css";

function Home() {
  const [keyword, setKeyword] = useState<string>("");
  return (
    <div className="homeContainer">
      <div className="homeTitle">Save the planet</div>
      <div>
        {/* <label htmlFor="searchBar"></label> */}
        <input
          className="searchBar"
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            console.log(keyword);
          }}
        ></input>
        <button>Go!!</button>
      </div>
    </div>
  );
}

export default Home;
