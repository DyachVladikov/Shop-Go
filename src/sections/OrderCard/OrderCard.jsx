import NavigationProduct from "@/components/NavigationProduct"
import "./OrderCard.scss"
import Button from "@/components/Button"
import ProductOrdered from "@/components/ProductOrdered"
import InputForm from "@/components/InputForm"
import { useCallback, useContext, useEffect, useState } from "react"
import { Link,} from "react-router-dom";
import { CountProductsContent } from "@/context/countProductsContext"
import products from "@/collections/products/products"
import  { BasketCotrollerContext } from "@/context/basketControllerContext"


const OrderCard = () => {

    const titles = ["Subtotal","Discount", "Devileryy Fee"]

    const productsIdsAndCount = JSON.parse(localStorage.getItem("cart"))

    const SetProducts = new Set(productsIdsAndCount.map((item) => item.id.toString())); 

    const {countProduct} = useContext(CountProductsContent)

    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const [countTypeProduct, setCountTypeProduct] = useState(0)

    const [isVisible, setIsVisible] = useState(countProduct > 0)


    const {setTotalPrice, totalPrice, totalDiscount, setTotalDiscount} = useContext(BasketCotrollerContext)

    
    useEffect(() => {
        setIsVisible(countProduct > 0);
    }, [countProduct]);
    
    
    useEffect(() => {
        GetProductsInfo()
        setTotalPrice(GetPrice().totalCost * countTypeProduct)
        setTotalDiscount(GetDiscount())
    }, [countTypeProduct, refreshTrigger])

    function GetPrice(){
        const currentProducts = products.filter((item) => 
            SetProducts.has(item.id.toString()) 
        );
        
        const totalCost = currentProducts.reduce((sum, product) => sum + product.cost, 0);
        const totalDiscount = currentProducts.reduce((sum, product) => sum + product?.discount, 0);
        
        return {totalCost,totalDiscount}
    }
    
    
    const GetProductsInfo = useCallback(() =>  {
        const totalCost = GetPrice().totalCost
        const totalDiscount = GetPrice().totalDiscount
        
        setInfoProducts((prev) => {
            return {
                ...prev,
                cost: totalCost * prev?.count, 
                discount: totalDiscount
            }
        });
    },[countTypeProduct,refreshTrigger])

    const onClickCountChoose = (count) => {
        setCountTypeProduct(count)
    }
    const onClickRemoveProduct = () => {
       setRefreshTrigger(prev => prev + 1)
    }

    function GetDiscount() {
        const discountAmount = (totalPrice * totalDiscount) / 100;
        
        return discountAmount
    }
    
    const prices = [totalPrice, totalDiscount  , totalPrice === 0 ? 0 : 15]
    
    return (
        
         <section className="order-card container">
            <NavigationProduct path={["Cart"]} />
            <h1 className="h3">YOUR CART</h1>
            <div className="order-card__main">
                <ul className="order-card__products-list">
                    {isVisible && productsIdsAndCount.map(({id,qty}) => (
                        <li key={id}>  
                            <Link to={`/productdetails/${id}`} ></Link>
                            <ProductOrdered productId = {id} id={id}  count={qty} onClickCountChoose={onClickCountChoose} onClickRemoveProduct={onClickRemoveProduct}/>
                        </li>
                    ))}
                    {!isVisible && (
                        <div className="order-card__products-list--null">
                            <p className="order-card__products-list--null-text">There are no products in the cart :/</p>
                                <Button 
                            title = "Shop Now"
                            className = "banner__body-button"
                            label = "Shop Now"
                            type = "link"
                            mode = "black"
                            href = "/shop/casual"
                            />
                        </div>
                        
                    )}
                </ul>
                <div className="order-card__summary">
                    <div className="order-card__summary-header">
                        <h2 className="order-card__summary-header-title">Order Summary</h2>
                    </div>  
                    <ul className="order-card__summary-body-list">
                         {titles.map((name,index) => (
                            <li className="order-card__summary-body-item" key={index}>
                                <span className="order-card__summary-body-item-name">{name}</span>
                                <span className={`order-card__summary-body-item-price-${index}`}>${prices[index]}</span>
                            </li>
                         ))}
                    </ul>
                    <div className="hr"></div> 
                    <div className="order-card__summary-footer">
                        <div className="order-card__summary-footer-total">
                            <span>Total</span>
                            <span>${totalPrice + prices[2]}</span>
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