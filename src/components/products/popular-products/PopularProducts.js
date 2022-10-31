import classes from "./PopularProducts.module.css";
import { productsDetails } from "../../../assets/SiteImages";
import ProductCard from "../product-card/ProductCard";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useState } from "react";

const PopularProducts = () => {
  const [scrollPoint, setScrollPoint] = useState(0);
  const [scrollWidth, setScrollWidth]=useState(0)
  
  const getWidth=(newWidth)=> {
    setScrollWidth(newWidth)
  }

  const leftCarouselScroll = () => {
    setScrollPoint((prev) => (prev + 4*scrollWidth));
  };

  const rightCarouselScroll = () => {
    setScrollPoint((prev) => (prev - 4*scrollWidth));
  };


  return (
    <section>
      <h2 className="section_title">What the community is loving</h2>
      <div className={classes.popular_products_container}>
        <div
          className={classes.product_display_carousel}
          style={{ translate: `${scrollPoint}px` }}
        >
          {productsDetails.map((product) => (
            <ProductCard key={product.id} product={product} sendWidth={getWidth} />
          ))}
        </div>

{scrollPoint===0 ? null : 
        <button
          className={`${classes.button_carousel__left} ${classes.button_carousel}`}
          onClick={leftCarouselScroll}
        >
          <IoChevronBackSharp className={classes.font_position} />
        </button>
}

{Math.abs(scrollPoint) === productsDetails.length*(scrollWidth+32) ? null : 
        <button
          className={`${classes.button_carousel__right} ${classes.button_carousel}`}
          onClick={rightCarouselScroll}
        >
          <IoChevronForwardSharp className={classes.font_position} />
        </button>
}
      </div>
    </section>
  );
};

export default PopularProducts;
