import { useState,useRef, useEffect, useContext } from "react"
import { Link} from "react-router-dom";
import Button from "../Button"
import "./ProductOrdered.scss"
import products from "@/collections/products/products"
import { CountProductsContent } from "@/context/countProductsContext"
import classNames from "classnames";

const ProductOrdered = (props) => {
    const {
        productId, 
        count,
        onClickCountChoose,
        onClickRemoveProduct,
        id
    } = props

    const [productCount, setProductCount] = useState(count)
    const [currentProduct, setCurrentProduct] = useState(null)
    const ref = useRef()
    const { setCountProduct } = useContext(CountProductsContent)
    const [ SizeAndColor, setSizeAndColor ] = useState({color:"", size:""})

    const RemoveElement = () => {
        const items = JSON.parse(localStorage.getItem("cart"))

        const currentItems = items.filter((item) => item.id != productId)

        localStorage.setItem("cart", JSON.stringify(currentItems))
        setCountProduct(currentItems.length);
    }
    useEffect(() => {
        getProductFromId()
        onClickCountChoose(count)
        getSizeAndColor()
        
    }, [])

    const getSizeAndColor = () => {
        const items = JSON.parse(localStorage.getItem("cart"))

        const currentItems = items.find((item) => item.id === productId)
        
        setSizeAndColor({size: currentItems.size, color: currentItems.color})
    }

    const getProductFromId = async () => {
        /* const product = await fetch("")
        if(!product.ok)
            throw new Error("404") */
        setCurrentProduct(products.find((item) => item.id  === parseInt(productId)))

    }

    const SaveLocalStorage = (param) => {
        const items = JSON.parse(localStorage.getItem("cart"))

        const indexElement = items.findIndex((item) => item.id === productId)

        items[indexElement] = {
            ...items[indexElement],
            qty: productCount + param 
        }

        onClickCountChoose(productCount + param )

        localStorage.setItem("cart", JSON.stringify(items))
    }

    return (
            <div className="product-ordered" ref={ref}>
                <img className= "product-ordered__image" src={currentProduct?.mainSrc} />
                <Link className={classNames("product-ordered-link",`product-ordered-${id}`)}
                    to={`/productdetails/${id}`}
                >
                    <div className="product-ordered__description">
                        <h3 className="h5">{currentProduct?.title}</h3>
                        <span>{`Size: ${SizeAndColor?.size}`}</span>
                        <span>{`Color: ${SizeAndColor?.color}`}</span>
                        <h4 className="product-ordered__description-price">${currentProduct?.cost}</h4>
                    </div>
                </Link>
                
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
                        onClickRemoveProduct(productId)
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
                                            if(productCount <= 1 )
                                                return prev
                                            else {
                                                return prev -= 1
                                            }
                                        })
                                        if(productCount === 1)
                                            SaveLocalStorage(0)
                                        else
                                            SaveLocalStorage(-1)
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
                                        SaveLocalStorage(1)
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