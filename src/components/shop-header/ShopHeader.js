import { useState, useEffect } from "react";
import classes from "./ShopHeader.module.css";
import { headerImgArray } from "../../assets/SiteImages";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";

const ShopHeader = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const slideMove = () => {
    if (sliderIndex < headerImgArray.length - 1) {
      setSliderIndex((prev) => prev + 1);
    } else {
      setSliderIndex(0);
    }
  };

  const slideForward = () => {
    slideMove();
  };

  const slideBack = () => {
    if (sliderIndex === 0) {
      setSliderIndex(headerImgArray.length - 1);
    } else {
      setSliderIndex((prev) => prev - 1);
    }
  };

  const imgDot = new Array(headerImgArray.length).fill(<GoPrimitiveDot />);
  //   console.log(imgDot)

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      if (sliderIndex < headerImgArray.length - 1) {
        setSliderIndex((prev) => prev + 1);
      } else {
        setSliderIndex(0);
      }
    }, 3000);

    return () => clearInterval(slideShowInterval);
  }, [sliderIndex]);

  return (
    <div>
      <div className={classes.header_slider_container}>
        <div
          className={classes.header_slider}
          style={{ backgroundImage: `url(${headerImgArray[sliderIndex]})` }}
        ></div>
        <button className={`${classes.shop_header_button}  ${classes.shop_header_button_left}`} onClick={slideBack}>
          <IoChevronBackSharp />
        </button>
        <button className={`${classes.shop_header_button}  ${classes.shop_header_button_right}`} onClick={slideForward}>
          <IoChevronForwardSharp />
        </button>
        <div className={classes.dots}>
          {imgDot.map((dot, i) => (
            <span
              className={classes.dot}
              key={i}
              style={{ color: i === sliderIndex ? "yellow" : "white" }}
            >
              {dot}
            </span>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default ShopHeader;
