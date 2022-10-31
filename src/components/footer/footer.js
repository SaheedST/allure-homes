import classes from "./footer.module.css";
import { AiOutlineMail, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { FaPinterest, FaTwitter } from "react-icons/fa";
// import {ReactComponent as AppStore} from '../../assets/infographics-icons/app-store-logo-svgrepo-com.svg'
// import {ReactComponent as PlayStore} from '../../assets/infographics-icons/play-store-logo-svgrepo-com.svg'
import Appstore from '../../assets/appstore.png'
import Playstore from '../../assets/playstore.png'


const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <p className={classes.footer_heading}>
        <span className={classes.footer_heading__bold}>
          Inspiring homes for all.
        </span>
        <span className={classes.footer_heading__regular}>
          Decorate your home with stylish designs & quality products at honest
          prices
        </span>
      </p>
      <div className={classes.footer_links_container}>
        <div>
          <div className={classes.footer_links_group}>
            <p className={classes.footer_links_heading}>Contact us</p>
            <p>
              <span className={classes.footer_icon}>
                <AiOutlineMail />
              </span>
              <span>wecare@hipvan.com</span>
            </p>
            <p>
              <span className={classes.footer_icon}>
                <BiPhoneCall />
              </span>
              <span className={classes.footer_list} style={{fontSize: '0.7rem'}}>(+65)</span>
              <span>6291 1725 </span>
              <span className={classes.footer_list}>(Calls only)</span>
            </p>
            <p>
              <span className={`${classes.footer_bullet} ${classes.footer_icon}`}></span>
              <span >
                Hotline hours: Mon–Sat, 9:30am to 5:30pm excluding PH.
              </span>
            </p>
            <p>
              <span className={classes.footer_icon}>
                <AiOutlineMail />
              </span>
              <span>b2b@hipvan.com</span>
              <span className={classes.footer_list}>(Business enquiries only)</span>
            </p>
          </div>
          <div className={classes.footer_links_group}>
            <p className={classes.footer_links_heading}>
              HipVan Experience Store
            </p>
            <p>
              <span className={classes.footer_icon}>
                <MdLocationPin />
              </span>
              <span>
                Suntec City Mall #02-728/729/730 3 Temasek Blvd, S(038983)
                <span>See opening hours</span>
              </span>
            </p>
          </div>
        </div>
        <div className={classes.footer_links_group}>
          <p className={classes.footer_links_heading}>Let us help you</p>
          <p className={classes.footer_list}>Shipping & returns</p>
          <p className={classes.footer_list}>FAQ</p>
          <p className={classes.footer_list}>Contact us</p>
          <p className={classes.footer_list}>Terms & conditions</p>
          <p className={classes.footer_list}>Mobile app</p>
          <p className={classes.footer_list}>Your account</p>
        </div>
        <div className={classes.footer_links_group}>
          <p className={classes.footer_links_heading}>Get to know us</p>
          <p className={classes.footer_list}>About HipVan</p>
          <p className={classes.footer_list}>Customer testimonials</p>
          <p className={classes.footer_list}>Our blog</p>
          <p className={classes.footer_list}>Jobs</p>
        </div>
        <div className={classes.footer_links_group}>
          <p className={classes.footer_links_heading}>Work with us</p>
          <p className={classes.footer_list}>HipVan for business</p>
          <p className={classes.footer_list}>Press resource</p>
          <p className={classes.footer_links_heading}>Work with us</p>
          <p className={classes.footer_list}>Condos for rent</p>
        </div>
        <div className={classes.footer_links_group}>
          <p className={classes.footer_links_heading}>New?</p>
          <div>Get up to $900 off when you sign up today :)</div>
          <div>
            <form>
                <input></input>
                <button>Redeem Discount</button>
            </form>
          </div>
          <div><span>Follow us: </span><span>< AiFillFacebook/></span><span><FaPinterest /></span><span><AiFillInstagram/></span><span><FaTwitter /></span></div>
          <div ><span ><img className={classes.appstore} src={Appstore} alt=''/></span><span><img className={classes.appstore} src={Playstore} alt=''/></span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
