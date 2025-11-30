import { useEffect, useState, createContext } from "react";

export const CountProductsContent = createContext()

const countProductsContentProvider = ({children}) => {

    const [countProduct, setCountProduct] = useState("0")

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("cart"))
        setCountProduct(products?.length)
        
    }, [])

    

    return (
        <CountProductsContent.Provider value={{
            countProduct, setCountProduct
        }}>
            {children}
        </CountProductsContent.Provider>
    )
}

export default countProductsContentProvider