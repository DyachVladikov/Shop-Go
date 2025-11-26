import { useState,useRef } from "react"
import Button from "../Button"
import "./ProductOrdered.scss"

const ProductOrdered = (props) => {
    const {
        product, 
        size, 
        color, 
        count} = props

    const [productCount, setProductCount] = useState(1)
    const ref = useRef()

    const RemoveElement = () => {
        ref.current.remove()
    }

    return (
        <div className="product-ordered" ref={ref}>
            <img className= "product-ordered__image" src={product?.mainSrc} />
            <div className="product-ordered__description">
                <h3 className="h5">{product?.title}</h3>
                <span>{`Size: ${size}`}</span>
                <span>{`Color: ${color}`}</span>
                <h4 className="product-ordered__description-price">${product?.cost}</h4>
            </div>
            <div className="product-ordered__actions">
                <Button 
                title = "Delete"
                isLabelHidden
                onlyIcon
                iconLink = "/src/assets/icons/trash.svg"
                className = "product-ordered__actions-delete-button"
                type = "button"
                onClick = {() => {
                    RemoveElement() 
                }}
                />
                 <div className="product-banner__actions-count product-banner__actions-count--small">
                            <Button 
                                title = "minus"
                                isLabelHidden
                                className = "product-banner__actions-button--count-m"
                                type = "button"
                                onClick = {() => {
                                    setProductCount((prev) => {
                                        if(productCount <= 0 )
                                            return prev
                                        else {
                                            return prev -= 1
                                        }
                                    })
                                }}
                                onlyIcon = {true}
                                iconLink = "/src/assets/icons/minus.svg"
                            />
                            <span className="product-banner__actions-count-label">{productCount}</span>
                            <Button 
                                title = "plus"
                                isLabelHidden
                                className = "product-banner__actions-button--count-p"
                                type = "button"
                                onClick = {() => {
                                    setProductCount(prev => prev += 1)
                                }}
                                onlyIcon = {true}
                                iconLink = "/src/assets/icons/plus.svg"
                            />
                </div>
            </div>
        </div>
    )
} 

export default ProductOrdered