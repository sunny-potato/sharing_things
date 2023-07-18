import { useEffect, useState } from "react";
import { productInfo } from "../data/dataTypes";
import earth from "../images/earth.jpg";
import star from "../images/star.png";
import halfstar from "../images/halfStar.png";
import styles from "../styles/DisplayList.module.css";

function DisplayList({ productsList }: productInfo[]) {
  const [image, setImage] = useState<string>("");

  function showRating(rating: number) {
    if (0 <= rating && rating < 0.5) {
      return <div></div>;
    } else if (0.5 <= rating && rating < 1) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={halfstar} />
        </div>
      );
    } else if (1 <= rating && rating < 1.5) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
        </div>
      );
    } else if (1.5 <= rating && rating < 2) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={halfstar} />
        </div>
      );
    } else if (2 <= rating && rating < 2.5) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
        </div>
      );
    } else if (2.5 <= rating && rating < 3) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={halfstar} />
        </div>
      );
    } else if (3 <= rating && rating < 3.5) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
        </div>
      );
    } else if (3.5 <= rating && rating < 4) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={halfstar} />
        </div>
      );
    } else if (4 <= rating && rating < 4.5) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
        </div>
      );
    } else if (4.5 <= rating && rating < 5) {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={halfstar} />
        </div>
      );
    } else {
      return (
        <div>
          <span>{rating}</span>
          <span>{"  "}</span>
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
          <img className={styles.rating} src={star} />
        </div>
      );
    }
    // return image;
  }
  return (
    <div>
      {productsList.map((product: productInfo) => {
        return (
          <div className={styles.eachProduct} key={product.id}>
            <div>
              <img src={product.images} />
            </div>
            <div>
              {product.title}, {product.brand}
            </div>
            <div>{showRating(product.rating)}</div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayList;
