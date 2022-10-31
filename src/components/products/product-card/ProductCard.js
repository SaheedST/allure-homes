import classes from "./ProductCard.module.css";
import { useEffect, useRef, useState } from "react";

const ProductCard = ({ product, sendWidth }) => {
  const { name, imgURL, price } = product;

  const [divWidth, setDivWidth] = useState(0)
  const ref = useRef(null)

  
  useEffect(()=>{
      setDivWidth(ref.current.offsetWidth)
      sendWidth(divWidth)
      })
                                             

  return (
    <div className={classes.product_card_container} ref={ref}>
      <div
        className={classes.product_image}
        style={{ backgroundImage: `url(${imgURL})` }}
        
      ></div>
      <div className={classes.product_description}>{name}</div>
      <div className={classes.product_price}>${price}</div>
    </div>
  );
};

export default ProductCard;
