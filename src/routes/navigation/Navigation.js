import { Link, Outlet } from "react-router-dom";
import {BiUser} from 'react-icons/bi'
import {AiOutlineShoppingCart, AiOutlineMail} from 'react-icons/ai'
import classes from "./Navigation.module.css";
import ProductSearch from "../../components/products-search/ProductSearch";


const Navigation = () => {
  return (
    <div className={classes['nav-container']}>
      <div className={classes["main-nav-row"]}>
        <div className={classes["main-nav"]}>
          <div>
            <Link className={classes.logo} to={"/"}>Allure Homes</Link>
          </div>
          <div>|</div>
          <div className={classes["main-nav-links"]}>
          <span><Link to={'/'}>Shop</Link> </span>
          <span><Link>Ideas</Link> </span>
          <span><Link>Visit</Link> </span>
          </div>
        </div>
        <div className={classes["main-nav-plus"]}>
          <div><Link><ProductSearch /></Link></div>
          <div><Link><AiOutlineMail />
          </Link></div>
          <div><Link><BiUser /></Link></div>
          <div><Link><AiOutlineShoppingCart /></Link></div>
        </div>
      </div>
      <div className={classes["sub-nav-row"]}>
        <ul className={classes['subnav-links']}>
            <li><Link>New</Link></li>
            <li><Link>Sofas
            </Link></li>
            <li><Link>Dining</Link></li>
            <li><Link>Mattresses</Link></li>
            <li><Link>Lightings</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
