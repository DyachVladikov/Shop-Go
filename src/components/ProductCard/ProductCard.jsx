
import RatingView from "../RatingView"
import "./ProductCard.scss"

const ProductCard = (props) => {

    const {
        name, 
        rating, 
        cost, 
        imgSrc,
        discount,
    } = props

    const costWithDiscount = cost + (cost * discount / 100)

    return (
        <div className="product-card">
            <img className="product-card__image" src={imgSrc} />
            <h5 className="product-card__label">{name}</h5>
            <RatingView value = {rating}/>
            <div className="product-card__cost">
                <span className="product-card__cost-main">{`$${cost}`}</span>
                {discount !== 0 && (
                    <>
                        <span className="product-card__cost-discount-value">{`$${costWithDiscount}`}</span>
                        <span className="product-card__cost-discount-procent">{`-${discount}%`}</span>
                    </>
                )}
            </div>
            
        </div>
    )
}

export default ProductCard