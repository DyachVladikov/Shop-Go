import NavigationProduct from "@/components/NavigationProduct"
import "./OrderCard.scss"
import Button from "@/components/Button"
import ProductOrdered from "@/components/ProductOrdered"
import products from "@/collections/products/products"
import InputForm from "@/components/InputForm"

const OrderCard = () => {

    const titles = ["Subtotal","Discount", "Devileryy Fee"]
    return (
        <section className="order-card container">
            <NavigationProduct path={["Cart"]} />
            <h1 className="h3">YOUR CART</h1>
            <div className="order-card__main">
                <div className="order-card__products">
                    <ProductOrdered product={products[0]} />
                    <ProductOrdered product={products[1]} />
                    <ProductOrdered product={products[2]} />
                </div>
                <div className="order-card__summary">
                    <div className="order-card__summary-header">
                        <h2 className="order-card__summary-header-title">Order Summary</h2>
                    </div>  
                    <ul className="order-card__summary-body-list">
                         {titles.map((name,index) => (
                            <li className="order-card__summary-body-item" key={index}>
                                <span className="order-card__summary-body-item-name">{name}</span>
                                <span className="order-card__summary-body-item-price">$342</span>
                            </li>
                         ))}
                    </ul>
                    <div className="hr"></div> 
                    <div className="order-card__summary-footer">
                        <div className="order-card__summary-footer-total">
                            <span>Total</span>
                            <span>$467</span>
                        </div>
                         <div className="order-card__summary-footer-actions">
                            <InputForm 
                            className="order-card__summary-footer-input" 
                            title="Add promo code"
                            iconLink = "/src/assets/icons/promo.svg"
                            id="promo"
                            />
                            <Button 
                            title = "Apply"
                            className = "order-card__summary-footer-apply"
                            label = "Apply"
                            type = "button"
                            onClick = {() => {}}
                            mode ="black"
                            />
                        </div>
                    </div>
                    <Button 
                    title = "Go to checkout"
                    iconLink ="/src/assets/icons/checkout.svg"
                    className="order-card__summary-submit-button"
                    label ="Go to checkout"
                    type = "submit"
                    onClick = {() => {
                    }}
                    isIconBefore = "after" // "before" || "after" || "null"
                    mode ="black"
                    />
                </div>
            </div>
        </section>
    )
}

export default OrderCard