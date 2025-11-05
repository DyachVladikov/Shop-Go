import Products from "@/components/Products"
import "./Stuff.scss"
import productsList from "/src/collections/products/products.js"

const Stuff = ({isFirstPage}) => {

    return (
        <section className="stuff">
            {isFirstPage && (
                <>
                    <Products title = "NEW ARRIVALS" products={productsList}/>
                    <div className="hr hr--large-margin"></div>
                    <Products title = "TOP SELLING" products={productsList}/>
                </>   
            )}
            {!isFirstPage && (
                <Products title = "You might also like" products={productsList}  hasButton = {false}/>
            )}
            
        </section>
    )
}

export default Stuff