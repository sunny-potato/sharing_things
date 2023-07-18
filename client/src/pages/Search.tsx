import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { filterDataBySearchKeyword } from "../data/Axios";
import DisplayList from "../components/DisplayList";

function Search() {
  const location = useLocation();
  const [keyword, setKeyword] = useState<string>("");
  const [products, setProducts] = useState<[]>([]);
  console.log(products);
  useEffect(() => {
    if (location.state) {
      setKeyword(location.state);
      const filterData = async function filterData() {
        const filteredData = await filterDataBySearchKeyword(keyword);
        setProducts(filteredData);
      };
      filterData();
    }
  }, [keyword]);
  // const [test, setTest] =useState("test")
  return (
    <div>
      SEARCH
      {products.length === 0 && <div>no result for {keyword}</div>}
      {products.length !== 0 && <DisplayList productsList={products} />}
    </div>
  );
}

export default Search;
