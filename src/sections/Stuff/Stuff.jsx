import Products from "@/components/Products"
import "./Stuff.scss"
import productsList from "/src/collections/products/products.js"

const Stuff = () => {

    return (
        <section className="stuff">
            <Products title = "NEW ARRIVALS" products={productsList}/>
            <div className="hr hr--large-margin"></div>
            <Products title = "TOP SELLING" products={productsList}/>
        </section>
    )
}

export default Stuff