import ShopHeader from "../../components/shop-header/ShopHeader";
import MainCategories from "../../components/main-categories/MainCategories";
import PopularProducts from "../../components/products/popular-products/PopularProducts";
// import RecentlyViewed from "../../components/recently-viewed/RecentlyViewed";
// import Reviews from "../../components/reviews/Reviews";
import Infographics from "../../components/infographics/Infographics";

const Shop=()=>{

    return(
        <>
        
        <ShopHeader />
        <MainCategories />
        <PopularProducts />
        {/* <RecentlyViewed />
        <Reviews /> */}
        <Infographics />
        </>
    )
}

export default Shop;