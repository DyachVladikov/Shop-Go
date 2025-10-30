
import classNames from "classnames"
import RatingView from "../RatingView"
import "./ProductCard.scss"
import ProductCost from "../ProductCost"
import { Scripts } from "react-router-dom"

const ProductCard = (props) => {

    const {
        name, 
        rating, 
        cost, 
        imgSrc,
        discount,
        className = "",
    } = props

    

    return (
        <div className={classNames("product-card", `product-card-${className}`)}>
            <img className="product-card__image" src={imgSrc} />
            <h5 className="product-card__label">{name}</h5>
            <RatingView value = {rating}/>
            <ProductCost cost={cost} discount={discount} />
            
        </div>
    )
}

export default ProductCard