import classNames from "classnames"
import "./ProductCost.scss"

const ProductCost = (props) => {

    const {
        cost,
        discount,
        className
    } = props

    const costWithDiscount = cost + (cost * discount / 100)
    return (
        <div className={classNames("product-card__cost", {"product-card__cost--large" : className == "banner"})}>
                <span className="product-card__cost-main">{`$${cost}`}</span>
                {discount !== 0 && (
                    <>
                        <span className="product-card__cost-discount-value">{`$${costWithDiscount}`}</span>
                        <span className={classNames("product-card__cost-discount-procent", {"product-card__cost-discount-procent--large" : className == "banner"})}>
                            {`-${discount}%`}</span>
                    </>
                )}
        </div>
    )
}

export default ProductCost