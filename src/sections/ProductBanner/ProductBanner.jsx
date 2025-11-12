import { useState, useEffect, useRef } from "react"
import { useParams} from "react-router-dom";
import "./ProductBanner.scss"
import RatingView from "@/components/RatingView"
import ProductCost from "@/components/ProductCost"
import classNames from "classnames"
import Button from "@/components/Button"
import productsItems from "/src/collections/products/products.js"
import Sizes from "@/components/Sizes";

const ProductBanner = () => {
   
    const products = productsItems
    const { id } = useParams();
    const text = useParams();

    const [product, setProduct] = useState(null)
        useEffect(() => {
            products.forEach((element) => {
                if(element.id === Number(id))
                    setProduct(element);
            })
            
        }, [id]);

    const [isActiveColor, setIsActiveColor] = useState(null)
    const [countProducts, setCountProducts] = useState(0)
    const [indexMainSrc, setIndexMainSrc] = useState(0)

    const scrollRef = useRef(null)


    useEffect(() => {
        if (product) {
            setIsActiveColor(product.colors[0]);
            setCountProducts(0);
            ScrollUp();
        }
    }, [product]);


    const ScrollUp = () => {
        const elementTop = scrollRef.current.getBoundingClientRect().top;
        const offset = 120; 

        window.scrollBy({
        top: elementTop - offset,
        behavior: "smooth"
        });
    }
    if(!product) return <p>Загрузка</p>
    
      return (
        <section className="product-banner container" ref={scrollRef}>
            <div className="hr"/>
            <div className="product-banner__header">
                <span className="product-banner__header-path">Home</span>
                <span className="product-banner__header-path">Shop</span>
                <span className="product-banner__header-path">{product?.gender}</span>
                <span className="product-banner__header-path">{product?.type}</span>
            </div>  
            <div className="product-banner__body">
                <div className="product-banner__card">
                    <div className="product-banner__card-aside">
                            <ul className="product-banner__card-aside-list" >
                                {product?.src.map((currentSrc,index) => {
                                    return (
                                        <li className="product-banner__card-aside-item" key={index}>
                                        <button id={index}
                                        className = "product-banner__card-aside-button" 
                                        style={{backgroundImage: `url(${currentSrc})`}} 
                                        onClick={() => {
                                            setIndexMainSrc(index)
                                        }}
                                        />
                                    </li>
                                    )   
                                })}
                            </ul>
                    </div>
                    <div className="product-banner__card-main">
                        <img className="product-banner__card-image" 
                        src={product.src[indexMainSrc]} />
                    </div>
                </div>
                <div className="product-banner__description">
                    <div className="product-banner__description-title">
                        <h1 className="product-banner__description-name">{product?.title}</h1>
                        <RatingView className="banner" value={product?.rating}/>
                        <ProductCost className="banner" cost={product?.cost} discount={product?.discount} />
                        <p className="product-banner__description-text">
                            {product?.description}
                        </p>
                    </div>
                    <div className="product-banner__colors">
                        <span className="product-banner__colors-label">Select Colors</span>
                        <ul className="product-banner__colors-list">
                            {product?.colors.map((color, index) => {                                
                                return(
                                    <li className={classNames("product-banner__colors-item", {"is-active" : isActiveColor === color})} 
                                    key={index}
                                    style={{backgroundColor: `${color}`}}
                                    >
                                        <button 
                                        className="product-banner__colors-button"
                                        onClick={() => {
                                            setIsActiveColor((isActiveColor) => (isActiveColor = color))
                                        }}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="product-banner__sizes">
                        <span className="product-banner__sizes-label">Choose Size</span>
                        <Sizes sizes={product.sizes} />
                    </div>
                    <div className="product-banner__actions">
                        <div className="product-banner__actions-count">
                            <Button 
                                title = "minus"
                                isLabelHidden
                                className = "product-banner__actions-button--count-m"
                                type = "button"
                                onClick = {(() => {
                                    if(countProducts > 0)
                                        setCountProducts(countProducts - 1)
                                })}
                                onlyIcon = {true}
                                iconLink = "/src/assets/icons/minus.svg"
                            />
                            <span className="product-banner__actions-count-label">{countProducts}</span>
                            <Button 
                                title = "plus"
                                isLabelHidden
                                className = "product-banner__actions-button--count-p"
                                type = "button"
                                onClick = {(() => {
                                    setCountProducts(countProducts + 1)
                                })}
                                onlyIcon = {true}
                                iconLink = "/src/assets/icons/plus.svg"
                            />
                        </div>
                        <Button 
                            title = "Add to Cart"
                            className = "product-banner__actions-button--add"
                            label = "Add to Cart"
                            type = "button"
                            onClick = {(() => {})}
                            mode = "black"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBanner