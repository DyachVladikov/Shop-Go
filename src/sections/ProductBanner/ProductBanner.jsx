import { useState } from "react"
import "./ProductBanner.scss"
import data from "./data.json"
import RatingView from "@/components/RatingView"
import ProductCost from "@/components/ProductCost"
import classNames from "classnames"
import Button from "@/components/Button"

const ProductBanner = () => {
   
    const product = data
    const [indexMainSrc, setIndexMainSrc] = useState(1)
    const [isActiveColor, setIsActiveColor] = useState(product.colors[0])
    const [isActiveSize, setIsActiveSize] = useState(null)
    const [countProducts, setCountProducts] = useState(0)

    return (
        <section className="product-banner container">
            <div className="hr"/>
            <div className="product-banner__header">
                <span className="product-banner__header-path">Home</span>
                <span className="product-banner__header-path">Shop</span>
                <span className="product-banner__header-path">Men</span>
                <span className="product-banner__header-path">T-shirts</span>
            </div>  
            <div className="product-banner__body">
                <div className="product-banner__card">
                    <div className="product-banner__card-aside">
                            <ul className="product-banner__card-aside-list" >
                                {product.src.map((currentSrc,index) => {
                                    return (
                                        <li className="product-banner__card-aside-item" key={index}>
                                        <button id={index}
                                        className = "product-banner__card-aside-button" 
                                        style={{backgroundImage: `url(${currentSrc})`}} 
                                        onClick={() => {
                                            setIndexMainSrc(index + 1)
                                        }}
                                        />
                                    </li>
                                    )   
                                })}
                            </ul>
                    </div>
                    <div className="product-banner__card-main">
                        <img className="product-banner__card-image" 
                        src={`/src/assets/images/productDetailsPage/product1/${indexMainSrc}.png`} />
                    </div>
                </div>
                <div className="product-banner__description">
                    <div className="product-banner__description-title">
                        <h1 className="product-banner__description-name">{product.title}</h1>
                        <RatingView className="banner" value={product.rating}/>
                        <ProductCost className="banner" cost={product.cost} discount={product.discount} />
                        <p className="product-banner__description-text">
                            {product.description}
                        </p>
                    </div>
                    <div className="product-banner__colors">
                        <span className="product-banner__colors-label">Select Colors</span>
                        <ul className="product-banner__colors-list">
                            {product.colors.map((color, index) => {                                
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
                        <ul className="product-banner__sizes-list">
                            {product.sizes.map((size,index) => (
                                <li className="product-banner__sizes-item" key={index}>
                                    <Button 
                                    title = {size}
                                    className = {classNames("product-banner__sizes-button", {"is-active" : isActiveSize === size })}
                                    label = {size}
                                    type = "button"
                                    onClick = {(() => {
                                        setIsActiveSize(size)
                                    })}
                                    mode = "sizes"
                                    />
                                </li>
                            ))}
                        </ul>
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