import { Link} from "react-router-dom";
import { memo } from "react";
import classNames from "classnames"
import RatingView from "../RatingView"
import "./ProductCard.scss"
import ProductCost from "../ProductCost"
import {img} from "@/modules/RepairImgSrc"

const ProductCard = (props) => {

    const {
        title, 
        rating, 
        cost, 
        src = [],
        discount,
        id,
        className = "",
    } = props

    

    return (
        <Link className={classNames("product-card", `product-card-${className}`)}
            to={`/productdetails/${id}`}
        >
            <img className="product-card__image" src={`${import.meta.env.BASE_URL}${src[0]}`} />
            <h5 className="product-card__label">{title}</h5>
            <RatingView value = {rating}/>
            <ProductCost cost={cost} discount={discount} />
        </Link>
    )
}

export default memo(ProductCard)