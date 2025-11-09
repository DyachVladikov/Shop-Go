import Accrodion from "@/components/Accordion"
import "./ShopProducts.scss"
import products from "@/collections/products/products.js"

const ShopProducts = () => {

    
    return(
        <section className="shop-products">
            <header className="shop-products__header">
                <h1 className="visually-hidden">Shop</h1>
                <div>Navigation Component</div>
            </header>
            <div className="shop-products__body">
                <aside className="shop-products__filters">
                    <div className="shop-products__filters-categories">
                        <Accrodion
                        className = "accordion__categories"
                        isNeedToHide = {false}
                        title = "Filters"
                        >
                            <span>Select Component</span>
                            <span>Select Component</span>
                            <span>Select Component</span>
                            <span>Select Component</span>
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-price">
                        <Accrodion
                        className = "accordion__price"
                        isNeedToHide
                        title = "Price"
                        >
                            <span>Scroll Component</span>
                        </Accrodion>
                    </div>
                    <div className="shop-products__filters-colors">

                    </div>
                    <div className="shop-products__filters-sizes">

                    </div>
                    <div className="shop-products__filters-styles">

                    </div>
                    <div className="shop-products__filters-actions">

                    </div>
                </aside>
                <div className="shop-products__main">

                </div>
            </div>
        </section>
    )
}

export default ShopProducts