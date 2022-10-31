import classes from "./MainCategories.module.css";
import { mainCategoriesImgs } from "../../assets/SiteImages";

const MainCategories = () => {
  return (
    <section>
      <h2 className="section_title">All you'll need right here</h2>
      <div className={classes.main_categories_container}>
        {mainCategoriesImgs.map(({id, title, imgURL})=>{
            return <div className={classes.category_card_container} key={id}>
                <div className={classes.category_image} style={{backgroundImage: `url(${imgURL})`}}/>
                <div className={classes.category_title}>{title}</div>
            </div>
        })}
       
            
      </div>
      <div></div>
    </section>
  );
};

export default MainCategories;
