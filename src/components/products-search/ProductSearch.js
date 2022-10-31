import {IoIosSearch} from 'react-icons/io'
import classes from './ProductSearch.module.css'
import {ReactComponent as SearchIcon} from '../../assets/searchicon.svg'

const ProductSearch =()=>{

    return (<form>
        <SearchIcon />
        <input type='search' placeholder={`Find everything for your home`} />
    </form>)
}

export default ProductSearch;