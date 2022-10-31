import classes from './Infographics.module.css'
import {ReactComponent as Boxes} from '../../assets/infographics-icons/boxes-box-svgrepo-com.svg'
import {ReactComponent as CreditCard} from '../../assets/infographics-icons/credit-card-svgrepo-com.svg'
import {ReactComponent as Shop} from '../../assets/infographics-icons/shop-svgrepo-com.svg'
import {ReactComponent as Truck} from '../../assets/infographics-icons/delivery-truck-svgrepo-com.svg'


const Infographics =()=>{

    return (
        <div className={classes.infographics_section_container}>
            <div className={classes.infographics_container}>
                <div className={classes.infographics_card}>
                    <div className={classes.icon}><Truck /></div>
                    <div className={classes.infographics_title}>Free Delivery</div>
                    <div className={classes.infographics_tip}>For orders above $250</div>
                </div>
                <div className={classes.infographics_card}>
                    <div className={classes.icon}><Shop /></div>
                    <div className={classes.infographics_title}>Experience Store</div>
                    <div className={classes.infographics_tip}>View furniture on display</div>
                </div>
                <div className={classes.infographics_card}>
                    <div className={classes.icon}><CreditCard /></div>
                    <div className={classes.infographics_title}>0% Interest Instalments</div>
                    <div className={classes.infographics_tip}>For orders above $100</div>
                </div>
                <div className={classes.infographics_card}>
                    <div className={classes.icon}><Boxes /></div>
                    <div className={classes.infographics_title}>Hold your order</div>
                    <div className={classes.infographics_tip}>Free for up to 3 months</div>
                </div>
            </div>
            <div className={classes.site_literature}>
                <div className={classes.segment}>
                    <div className={classes.lighter_segment}>Complement Your Space with Our Contemporary Furniture in SG</div><br/>
                    <div className={classes.lighter_segment}>Buy Stylish Furniture Online in Singapore with HipVan</div>
                    <p>On the lookout for a furniture shop in Singapore? Look no further than HipVan! A homegrown company, HipVan carries an eclectic selection of sofas, coffee tables, dining tables, chairs, beds, mattresses, lighting and more. Each piece of furniture and home furnishings you can find on our online store is thoughtfully curated to match your style preferences – be it Scandinavian, modern, industrial, minimalist, bohemian resort or anything in between. With plenty to explore under one platform, there’s no need to shop for furniture anywhere else apart from HipVan.</p>
                </div>
                <div className={classes.segment}>
                    <div className={classes.lighter_segment}>Singaporean’s Favourite Online Furniture Store</div>
                    <p>At HipVan, we understand that most quality furniture in Singapore comes with a hefty price tag. But we refuse to resign ourselves to the fact that buying stylish, quality furniture for your home simply means having to fork out a fortune. So here are we – bringing greater value to you. At HipVan, we’ve cut out all the cumulative costs of middlemen to put products with the perfect blend of style, quality and affordability at your fingertips.</p>
                    <p>With over 5,000 unique designs to choose from, you’re just one step away from making your dream home a reality. Order online to enjoy free delivery in Singapore on all orders above $250. Upon delivering your order, we also go the extra mile to assemble the furniture for you, if applicable. That’s not all! With our 100-day easy return policy, you can now return your purchase to us within 100 days of the date you received the item with no questions asked – we promise. Browse through our collection today!</p>
                    <p>Should you have any enquiries, please do not hesitate to browse through our FAQ page or get in touch with our team! We look forward to serving you.</p>
                </div>
            </div>
        </div>
    )

}

export default Infographics;