import classNames from "classnames";
import Button from "../Button"
import ProductCard from "../ProductCard";
import "./Products.scss"
import { useState, useEffect, useRef, use } from "react";
import { Link,} from "react-router-dom";
import Slider from "../Slider";
import { createSwiperConfig } from "@/modules/SwiperConfig";

const Products = (props) => {

    const {
        title,
        products = [],
        hasButton = true,
    } = props

     const swiperConfig = createSwiperConfig({
            options: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
            centeredSlides: false,
            spaceBetween: 16,
            observer: true,
            observeParents: true,
            
            },
        });

    
    const [showAll, setShowAll] = useState(false);
    const [width, setWidth] = useState(1440);
    const [initialVisible, setinitialVisible] = useState(4);
    const [visibleProducts, setVisibleProducts] = useState([])

    const targetScrollRef = useRef(null);
    
    useEffect(() => {
        window.addEventListener("resize", checkWidth)

        checkWidth();

        return () => window.removeEventListener("resize", checkWidth);
    })
    useEffect(() => {
        setVisibleProducts(products.slice(0, initialVisible))  
        
    },[initialVisible])

    useEffect(() => {
        if(width < 767 && hasButton)
        {
            setinitialVisible(3)
        }
        else if(width < 767 && !hasButton) {
            setinitialVisible(4)
        }
        if(width < 1040 && width >= 767)
            setinitialVisible(2)
        if(width < 1380 && width >= 1040)
            setinitialVisible(3)
        if(width >= 1380)
            setinitialVisible(4)
    }, [width])


    const checkWidth = () => {
        setWidth(window.innerWidth)    
    }

    const handleToggle = () => {
        
        setShowAll((prev) => {
            if(prev === false) {
                if(initialVisible > 16)
                    return !prev
                else
                {
                    setinitialVisible((prev) => (prev + 4))
                    return prev
                }
            }
            if(prev === true)
            {
                targetScrollRef.current?.scrollIntoView({behavior: "smooth", block: 'center'});
                setinitialVisible(4)
                return !prev
            }
        });
        
    };

    return (
        <div className="product">
            <div className="product__inner container">
                <h2 className="product__title" ref={targetScrollRef}>{title}</h2>
                <div className="product__body">
                    {width < 767 &&
                    (
                        <Slider className="products__slider"
                        type = "products" config = {swiperConfig} key={width}
                        >
                            {visibleProducts}
                        </Slider>
                    )}
                    <ul className={classNames("product__body-list", {"product__body-list--opened" : initialVisible > 5}, "hidden-mobile")} >
                        {visibleProducts.map((product, index) => (
                            <li key={index}>
                                <Link to={`/productdetails/${product.id}`} key={index}></Link>
                                <ProductCard 
                                {...product}
                                />
                            </li>
                            
                        ))}
                    </ul>
                    {products.length > initialVisible && hasButton && (
                        <Button className="product__body-button" type = "button" onClick={handleToggle}>
                        {showAll ? "Hide" : "View More"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
        
    )
}

export default Products