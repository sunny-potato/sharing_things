import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";
import "../styles/Home.css";
// import Earth from "../images/earth.jpg";

function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>("");
  const [products, setProducts] = useState<[]>([]);
  // console.log(keyword);

  // async function filterProducts() {
  //   const productsList = await getAllProducts();
  // const filteredProducts = productsList.filter(
  //   (product: Record<string, string>) => {
  //     return (
  //       product.title.includes(keyword) ||
  //       product.description.includes(keyword) ||
  //       product.brand.includes(keyword)
  //     );
  //   }
  // );
  // return filteredProducts;
  // }
  return (
    <div className="homeContainer">
      {/* <img className="homeBackground" src={Earth} alt="earth" /> */}
      <div className="homeTitle">Save the planet</div>
      <div>
        {/* <label htmlFor="searchBar"></label> */}
        <input
          className="searchBar"
          type="text"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        ></input>
        <button
          onClick={async () => {
            navigate("/search", { state: keyword });
          }}
        >
          Go!!
        </button>
      </div>
    </div>
  );
}

export default Home;
