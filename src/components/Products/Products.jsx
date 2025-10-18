import Button from "../Button"
import ProductCard from "../ProductCard";
import "./Products.scss"
import { useState } from "react";

const Products = (props) => {

    const {
        title,
        products = [],
        hasButton = true,
    } = props

    const [showAll, setShowAll] = useState(false);
    const initialVisible = 4;

    const handleToggle = () => {
        setShowAll((prev) => !prev);
    };

    const visibleProducts = showAll ? products : products.slice(0, initialVisible);

    return (
        <div className="product__inner container">
            <h2 className="product__title">{title}</h2>
            <div className="product__body">
                <div className="product__body-list">
                    {visibleProducts.map((product, index) => (
                        <ProductCard 
                        {...product}
                        key={index}/>
                    ))}
                </div>
                {products.length > initialVisible  && hasButton && (
                    <Button className="product__body-button" type = "button" onClick={handleToggle}>
                    {showAll ? "Hide" : "View All"}
                    </Button>
                )}
            </div>
                
        </div>
    )
}

export default Products